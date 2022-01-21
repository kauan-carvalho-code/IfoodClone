import styled from "styled-components";

export const Container = styled.div`
  .swiper {
  width: 100%;
  height: 100%;
  z-index: 9999;
  }

  .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  }

  .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  width: 412px;
  height: 200px;
`;