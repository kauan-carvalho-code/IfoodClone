import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  background: #f7f7f7;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 79.875rem !important;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 3rem;

  @media only screen and (max-width: 960px) {
    padding: 1.875rem 2.75rem 1.875rem 1.875rem;
  }

  @media only screen and (max-width: 960px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 560px) {
    height: 1.4375rem;
    padding: 1.5rem 1rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-right: 1.5rem;
  height: 100%;

  @media only screen and (max-width: 960px) {
    padding: 0 3.125rem;
  }

  @media only screen and (max-width: 560px) {
    height: 2.6875rem;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  height: 3rem;

  @media only screen and (max-width: 560px) {
    height: 2.6875rem;
  }
`;

export const Navigation = styled.nav`
  a {
    padding: 0 0.625rem;
    font-weight: 600;
    background: transparent;
    color: #3e3e3e;
    font-size: 1rem;
    height: 3.125rem;
    transition: .1s;
    overflow: hidden;
    line-height: 1.25em;
    cursor: pointer;
    margin: 0.1875rem 0.3rem;
  }

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 88%;

  @media only screen and (max-width: 960px) {
    .create_account {
      display: none;
    }
  }

  @media only screen and (max-width: 560px) {
    button {
      height: 2.125rem;
      width: 5.5rem;
    }
  }
`;

export const BarsContainer = styled.div`
  width: 2.75rem;
  height: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 60rem) {
    display: none;
  }

  @media only screen and (max-width: 560px) {
    margin-right: 0.75rem;
  }
`;

export const Bars = styled.img`
  color: #a6a29f;
  width: 100%;
  height: 100%;
  padding: 0.1875rem 0.3125rem;
`;

