import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Image } from "./styles";


export function LandingBanner({identifier}) {
  return (
    <Container>
      <Swiper
       id={identifier}
       className="mySwiper" 
       spaceBetween={20} 
       slidesPerView={3}
       breakpoints={{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.8,
        },
        960: {
          slidesPerView: 2.4,
        },
        1280: {
          slidesPerView: 3,
        }
      }}
      >
        <SwiperSlide className="swiper_slide">
          <Image src="assets/landing-banner-1.webp" alt="Banner"/>
        </SwiperSlide  >
        <SwiperSlide className="swiper_slide">
          <Image src="assets/landing-banner-2.webp" alt="Banner"/>
        </SwiperSlide>
        <SwiperSlide className="swiper_slide">
          <Image src="assets/landing-banner-3.webp" alt="Banner"/>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}