import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;

  .mySwiper {
  margin-bottom: 2rem;
  width: 100%;
  height: 142px;
  position: relative;
  overflow: clip;
  overflow-clip-margin: 16px;

  @media only screen and (max-width: 960px) {
    height: 105px;
  }
  }

  .swiper-wrapper {
   height: 100%; 
   align-items: center;
  }

  .swiper-button-prev {
    color: #3e3e3e;
    width: 36px;
    height: 36px;
    left: -1rem;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    background: #fff;
    z-index: 9999;

    &::after {
      font-size: 1rem;
    }

    &:hover {
    border-color: #9A9483;
    }

    @media only screen and (max-width: 768px) {
    display: none;
    }
  }

  .swiper-button-next {
    color: #3e3e3e;
    width: 36px;
    height: 36px;
    right: -1rem;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    background: #fff;

    &::after {
      font-size: 1rem;
    }

    &:hover {
    border-color: #9A9483;
    }

    @media only screen and (max-width: 768px) {
    display: none;
    }
  }
`;

export const Title = styled.h2`
  color: #1a1a1a;
  margin: 0;
  width: 100%;
  font-size: 1.5rem;
  padding: 50px 0 32px;
  font-weight: 600;
  line-height: 1.875rem;
  border-top: 2px solid #f2f2f2;

  @media only screen and (max-width: 960px) {
    font-size: 1.25rem;
    line-height: 1.675rem;
    padding: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.675rem;
  }
`;
