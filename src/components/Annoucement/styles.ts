import styled from "styled-components";

export const Container = styled.div`
  background-image: url("assets/backgroundAd.svg");
  background-repeat: no-repeat;
  background-position: 30px 20px;
  background-size: 70% auto;

  width: 85%;
  height: auto;
  padding-bottom: 40px;

  position: relative;

  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 960px) {
    background-size: 60% auto;
    align-items: center;
    padding-bottom: 100px;
  }

  @media only screen and (max-width: 768px) {
    width: 333px;
    height: 248px;
    background-size: 100% 100%;
    background-position: 50%;
    padding-bottom: 60px;
  }
`;

export const FigureContainer = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  left: 2.4rem;
  bottom: 0;
  
  display: flex;
  align-items: flex-end;

  @media only screen and (max-width: 1248px) {
    width: 193px;
    bottom: 3rem;
  }

  @media only screen and (max-width: 960px) {
    width: 235px;
    left: 0;
    bottom: 0.4rem;
  }

  @media only screen and (max-width: 768px) {
    width: 147px;
    left: 0%;
    bottom: -0.2rem;
  }
`;

export const Figure = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  width: 50%;
  position: relative;
  top: -3.6rem;
  right: 0;

  button {
    margin: 0;
  }

  @media only screen and (max-width: 1248px) {
    width: 45%;
  }

  @media only screen and (max-width: 960px) {
    top: 2.6rem;
  }

  @media only screen and (max-width: 768px) {
    width: 52%;
    top: 2rem;

    button {
      width: 114px;
      height: 34px;
    }
  }
`;

export const Title = styled.p`
  font-size: 2.25rem;
  line-height: 2.75rem;
  margin: 12px 0 0;
  color: #1a1a1a;
  font-weight: 600;

  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    width: 64%;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 25px;
  color: #717171;
  margin-right: 24px;
  width: 80%;

  @media only screen and (max-width: 768px) {
    font-size: .875rem;
    line-height: 1.125rem;
    width: 110%;
  }
`;