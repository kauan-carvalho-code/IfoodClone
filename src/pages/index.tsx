import styled from "styled-components";
import { Annoucement } from "../components/Annoucement";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { LandingBanner } from "../components/LandingBanner";
import Layout from "../components/Layout";
import { SearchContainer } from "../components/SearchContainer";

const Main = styled.main`
  padding: 0;
  transition: .5s;
  padding: 70px 32px 50px;

  @media only screen and (max-width: 960px) {
    padding: 50px 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 28px 16px;
  }
`;

const MainContent =  styled.div`
  max-width: 1268px !important;
  margin: 0 auto;
`;

const AnnoucementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1050px;
  margin: 0 auto;
  padding-top: 110px;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    padding-top: 20px;
  }
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
          <AnnoucementsContainer>
            <Annoucement 
              title="Quer fazer entregas pelo iFood?"
              subtitle="Faça agora o seu cadastro e comece o quanto antes."
              image="assets/delivery-man.svg"
            />
            <Annoucement 
              title="A sua fome de crescer ta no iFood"
              subtitle="Cadastre seu restaurante ou o seu mercado"
              image="assets/store.svg"
            />
          </AnnoucementsContainer>
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