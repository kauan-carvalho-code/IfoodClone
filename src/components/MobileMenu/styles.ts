import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 85vw;
  background: #ffffff;
  position: fixed;
  z-index: 9999;
  right: 0;
  opacity: 0;

  @media only screen and (max-width: 580px) {
    width: 100vw;
  }

  transform: translateX(100%);
  transition: transform .3s ease,-webkit-transform .3s ease,-moz-transform .3s ease, opacity .2s ease-in-out;

  &.isOpen {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;

  &::after {
    content: '';
    width: 19vw;
    height: 100vh;
    position: absolute;
    left: -12rem;
    background-color: rgba(0, 0, 0, 0.2);
  }

  button {
    width: 100%;
    height: 50px;
    margin: 0;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 580px) {
    button {
      width: 94%;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @media only screen and (max-width: 580px) {
    padding: 20px 8px 20px 16px;
    width: 94%;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 48px;
`;

export const ExitIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-bottom: 12px;

  @media only screen and (max-width: 580px) {
    padding: 0 16px 20px;
  }

  li {
    width: 100%;
    height: 50px;

    a {
      background: transparent;
      color: #000000;
      font-size: 1rem;
      line-height: 1.25em;
      font-weight: 500;
    }
  }
`;