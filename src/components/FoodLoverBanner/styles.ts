import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  width: 26%;
  padding-right: 40px;

  button {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 102px;
      height: 34px;
      position: relative;
      top: 14.4rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.75rem;
  text-align: left;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    text-align: center;
    max-width: 280px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: left;
  max-width: unset;
  width: 84%;
  color: #717171;
  margin: 0;
  padding-bottom: 22px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 38%;
    position: relative;
    top: 15rem;
    min-width: 278px;
  }
`;

export const BannerContainer = styled.div`
  width: 55%;
  min-width: 445px;

  @media only screen and (max-width: 768px) {
    position: relative;
    bottom: 6rem;
  }
`;

export const Banner = styled.img`
  width: 100%;
`;