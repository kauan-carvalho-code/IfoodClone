import styled from "styled-components";

export const Main = styled.main`
  padding: 0;
  transition: .5s;
  padding: 70px 32px 50px;

  @media only screen and (max-width: 960px) {
    padding: 50px 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 28px 16px;
  }
`;

export const MainContent =  styled.div`
  max-width: 1278px !important;
  margin: 0 auto;
`;

export const AnnoucementsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1050px;
  padding-top: 80px;

  @media only screen and (max-width: 1248px) {
    max-width: 947px;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    max-width: 100%;
    padding-top: 0;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const BannerContainer = styled.div`
  margin: 0 auto;
  margin-top: 110px;
  border-top: 2px solid #f2f2f2;

  @media only screen and (max-width: 1240px) {
    margin-top: 40px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;