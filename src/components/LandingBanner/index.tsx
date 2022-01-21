import SwiperCore, {
  Navigation
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Image } from "./styles";


// install Swiper modules
SwiperCore.use([Navigation]);


export function LandingBanner({identifier}) {
  return (
    <Container>
      <Swiper
       id={identifier}
       className="mySwiper" 
       spaceBetween={20} 
       slidesPerView={3}
       navigation
       breakpoints={{
        0: {
          slidesPerView: 1.4,
        },
        768: {
          slidesPerView: 2.4,
        },
        960: {
          slidesPerView: 3,
        },
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