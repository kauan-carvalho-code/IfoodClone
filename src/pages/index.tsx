import { GetStaticProps } from "next";
import { Annoucement } from "../components/Annoucement";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { Copyright } from "../components/Copyright";
import { ExploreByCities } from "../components/ExploreByCities";
import { FoodLoverBanner } from "../components/FoodLoverBanner";
import { Footer } from "../components/Footer";
import { FullPageBanner } from "../components/FullPageBanner";
import { LandingBanner } from "../components/LandingBanner";
import Layout from "../components/Layout";
import { SearchContainer } from "../components/SearchContainer";
import { AnnoucementsContainer, BannerContainer, Main, MainContent } from "../styles/home";

export default function Home({ restaurants, markets, cities }) {
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
          <BannerContainer>
            <FoodLoverBanner />
          </BannerContainer>
          <FullPageBanner />
          <ExploreByCities cities={cities}/>
          <Footer />
          <Copyright />
        </MainContent>
      </Main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const responseRestaurants = await fetch("http://localhost:3000/api/restaurants");
  const responseMarkets = await fetch("http://localhost:3000/api/markets");
  const responseCities = await fetch("http://localhost:3000/api/cities")
  const dataRestaurants = await responseRestaurants.json();
  const dataMarkets = await responseMarkets.json();
  const dataCities = await responseCities.json();

  return {
    props: {
      restaurants: dataRestaurants,
      markets: dataMarkets,
      cities: dataCities
    }
  }
}