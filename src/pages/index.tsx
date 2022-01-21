import styled from "styled-components";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { LandingBanner } from "../components/LandingBanner";
import Layout from "../components/Layout";
import { SearchContainer } from "../components/SearchContainer";

const Main = styled.main`
  padding: 0;
  transition: .5s;
`;

export const MainContent =  styled.div`
  max-width: 1290px !important;
  margin: 0 auto;
`;

export default function Home({ restaurants, markets }) {
  return (
    <Layout>
      <SearchContainer />
      <Categories />
      <Main>
        <MainContent>
          <Carousel identifier="swiper1" sliders={restaurants} title="Os melhores restaurantes" loop/>
          <LandingBanner identifier="swiper2"/>
          <Carousel identifier="swiper3" sliders={markets} title="Os melhores mercados" loop/>
        </MainContent>
      </Main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const responseRestaurants = await fetch("http://localhost:3000/api/restaurants");
  const responseMarkets = await fetch("http://localhost:3000/api/markets");
  const dataRestaurants = await responseRestaurants.json();
  const dataMarkets = await responseMarkets.json();

  return {
    props: {
      restaurants: dataRestaurants,
      markets: dataMarkets
    }
  }
}