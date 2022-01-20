import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  padding: 70px 0 50px;
`;

export const Title = styled.h2`
  color: #1a1a1a;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.875rem;
  border-top: 2px solid #f2f2f2;
  padding: 50px 0 32px;
  padding-top: 60px;
`;

export const CarouselContent = styled(Swiper)`

`;

export const CarouselSlide = styled(SwiperSlide)`
  width: 100%;
`;

export const Link = styled.a`
  width: 100%;
  height: 132px;
  position: relative;
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
`;

export const About = styled.div`
`;

export const Checked = styled.div`
`;