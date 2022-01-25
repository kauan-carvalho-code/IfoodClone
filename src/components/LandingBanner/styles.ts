import styled from "styled-components";

export const Container = styled.div`
  .swiper {
  width: 100%;
  height: 200px;
  padding-bottom: 40px;

  @media only screen and (max-width: 1280px) {
    padding-bottom: 25px;
    } 
  @media only screen and (max-width: 768px) {
    height: 140px;
    }
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
`

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;