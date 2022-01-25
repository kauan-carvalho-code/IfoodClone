import styled from "styled-components";

export const Container = styled.footer`
  border-top: 2px solid #f2f2f2;
  margin-top: 2.4rem;
  padding-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const About = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-right: 13rem;

  h3 {
    color: #3e3e3e;
    margin-top: 0;
    margin-bottom: 1.6rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.22;
    color: #717171;
    font-weight: 600;
    margin-bottom: 1.6rem;

  a {
    cursor: pointer;
    transition: all .5s linear;

    &:hover {
      color: #3e3e3e;
    }
   }
  }
`;

export const FindItOut = styled.ul`
  list-style-type: none;
  padding-right: .8rem;

  @media only screen and (max-width: 768px) {
    padding-left: 5rem; 
  }

  @media only screen and (max-width: 560px) {
    padding: 0;
  }

  h3 {
    color: #3e3e3e;
    margin-top: 0;
    margin-bottom: 1.6rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.22;
    color: #717171;
    font-weight: 600;
    margin-bottom: 1.6rem;

  a {
    cursor: pointer;
    transition: all .5s linear;

    &:hover {
      color: #3e3e3e;
    }
   }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    color: #3e3e3e;
    fill: #3e3e3e;
  }
`;