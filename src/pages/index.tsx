import axios from "axios";
import { useEffect, useState } from "react";
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
import { ICities, IRestaurantsAndMarkets } from "../types";

export default function Home() {
  const [restaurants, setRestaurants] = useState<IRestaurantsAndMarkets[]>([]);
  const [markets, setMarkets] = useState<IRestaurantsAndMarkets[]>([]);
  const [cities, setCities] = useState<ICities[]>([]);

  useEffect(() => {
    axios.get("/api/restaurants").then(({data}) => setRestaurants(data));
    axios.get("/api/markets").then(({data}) => setMarkets(data));
    axios.get("/api/cities").then(({data}) => setCities(data));
  }, [])

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
