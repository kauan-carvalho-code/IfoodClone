import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ThinBanner = styled.img`
  width: 100%;
  height: 107px;

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const ThickBanner = styled.img`
  width: 100%;
  display: none;

  @media only screen and (max-width: 960px) {
    display: inline-block;
  }
`;