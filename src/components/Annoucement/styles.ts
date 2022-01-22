import styled from "styled-components";

export const Container = styled.div`
  background-image: url("assets/backgroundAd.svg");
  background-repeat: no-repeat;
  background-size: 85% auto;
  
  width: 45%;
  height: 349px;
  padding-bottom: 100px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    width: 100%;
    background-size: 55% auto;
    background-position: 30px 20px;
    padding-bottom: 40px;
    height: 277px;
  }
`;

export const FigureContainer = styled.div`
  position: absolute;
  width: 50%;
  left: 0.6rem;
  bottom: 8rem;
`;

export const Figure = styled.img`
  width: 85%;

  @media only screen and (max-width: 960px) {
    width: 235px;
    bottom: 0;
  }
`;

export const Content = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  top: -4.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    margin: 0;
  }

  @media only screen and (max-width: 960px) {
    top: 0;
  }
`;

export const Title = styled.p`
  font-size: 2.25rem;
  line-height: 2.75rem;
  margin: 12px 0 0;
  color: #1a1a1a;
  font-weight: 600;

  @media only screen and (max-width: 960px) {
    margin: 12px 80px 0 0;
    line-height: 1.875rem;
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  width: 90%;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 25px;
  color: #717171;
  margin-right: 24px;

  @media only screen and (max-width: 960px) {
    width: 60%;
  }
`;