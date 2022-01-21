import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 0 10px;
  height: 100%;
  width: 98%;
  
  .swiper {
  width: 100%;
  height: 142px;
  z-index: 1;
  position: relative;
  padding: 0 14px;
  }

  .mySwiper {
  margin-bottom: 2rem;
  width: 100%;
  z-index: 1;
  }

  .swiper-wrapper {
   height: 100%; 
   z-index: 1;
   align-items: center;
  }

  .swiper-button-prev {
    color: #3e3e3e;
    width: 36px;
    height: 36px;
    left: -0.015rem;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    background: #fff;

    &::after {
      font-size: 1rem;
    }

    &:hover {
    border-color: #9A9483
  }
  }

  .swiper-button-next {
    color: #3e3e3e;
    width: 36px;
    height: 36px;
    right: -0.02rem;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    background: #fff;

    &::after {
      font-size: 1rem;
    }

    &:hover {
    border-color: #9A9483
  }
  }
`;

export const Title = styled.h2`
  color: #1a1a1a;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.875rem;
  border-top: 2px solid #f2f2f2;
  padding: 60px 0 32px;
`;
