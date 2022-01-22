import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselCard } from "../CarouselCard";
import { CategoryCard } from "../CategoryCard";
import { Container, Wrapper, WrapperContent } from "./styles";

export function Categories() {
  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <CategoryCard 
            title="Restaurante" 
            option="Ver opções" 
            color="#ea1d2c" 
            optionColor="#cc1825"
            image="assets/hamburguer.webp"
          />
          <CategoryCard 
            title="Mercado" 
            option="Buscar lojas" 
            color="#b6d048;" 
            optionColor="#9eb53e"
            image="assets/shoppingcart.webp"
            />
        </WrapperContent>
      </Wrapper>
      <Swiper
        id="mySwiper3"
        className="mySwiper" 
        spaceBetween={30} 
        slidesPerView={4}
        breakpoints={{
         0: {
           slidesPerView: 3,
           spaceBetween: 5,
         },
         480: {
          slidesPerView: 3,
         },
         768: {
           slidesPerView: 4,
         }
       }}
      >
        <SwiperSlide className="swiper_slide1">
          <CarouselCard option="Bebidas" className="drinks" image="assets/drinks.webp" background="#f6d553" />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide1">
          <CarouselCard option="Farmácia" className="pharmacy" image="assets/pharmacy.webp" background="#f9879c" />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide1">
          <CarouselCard option="Express" className="express" image="assets/express.webp" background="#ea1d2c" />
        </SwiperSlide>
        <SwiperSlide className="swiper_slide1">
         <CarouselCard option="Pet shop" className="petshop" image="assets/petshop.webp" background="#8c60c5" />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}