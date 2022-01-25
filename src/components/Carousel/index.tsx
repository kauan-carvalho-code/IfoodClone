import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselSlide } from "../CarouselSlide";
import { Container, Title } from "./styles";


SwiperCore.use([Navigation]);

interface ISliders {
  id: string;
  name: string;
  category: string;
  image: string;
  checked: boolean;
}

interface CarouselProps {
  title: string;
  sliders: ISliders[];
  loop: boolean;
  identifier: string;
}


export function Carousel({title, sliders = [], loop, identifier}: CarouselProps) {
  
  
  return (
    <Container>
      <Title>{title}</Title>
    <Swiper 
      id={identifier} 
      className="mySwiper" 
      spaceBetween={20} 
      loop={loop} 
      slidesPerView={5}
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1.8,
          loop: false,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {  
        sliders.map(({ name, category, image, checked, id }) => (
            <SwiperSlide key={id} className="swiper_slide">
              <CarouselSlide name={name} category={category} icon={image} checked={checked} />
            </SwiperSlide>
          ))
      }
    </Swiper>
    </Container>
  )
}