import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: calc(136px + 4vh);
  padding-bottom: 70px;
  
  @media only screen and (max-width: 960px) {
    padding-top: 110px;
    padding-bottom: 70px;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 110px;
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
    width: 90%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 52.625rem;
`;

export const Title = styled.p`
  margin-top: 0.9375rem;
  margin-bottom: 0.9375rem;
  font-weight: 600;
  font-size: 36px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin: 0 0 16px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  color: #717171;
  margin-top: 0;
  max-width: 200px;
  font-size: .875rem;
  
  @media only screen and (min-width: 768px) {
    max-width: none;
    margin-bottom: 40px;
    font-size: 1rem;
  }
`;


export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;

    button {
      width: 100%;
      height: 49px;
      margin: 0;
    }
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  width: 90%;
  height: 100%;
  max-width: 842px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 14px;
  }
`;

export const LocationIcon = styled.img`
  margin: 0 16px;
  width: 28px;
  height: 25px;
  svg {
    color: ${props => props.theme.colors.red700}
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 100;
  color: #a6a6a6 !important;
  background: transparent;

  @media only screen and (max-width: 768px) {
    height: 49px;
  }

  &::placeholder {
    color: #a6a6a6;
  }
`;

