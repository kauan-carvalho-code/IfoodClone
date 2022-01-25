import styled from "styled-components";

export const Container = styled.div`
  border-top: 2px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    }

  p {
    font-size: .8125rem;
    line-height: 1.35;
    font-weight: 300;
    color: #717171;
    margin: 0;
    width: 50%;

    @media only screen and (max-width: 768px) {
    width: 90%;
    }

    @media only screen and (max-width: 560px) {
    width: 80%;
    }
  }

`;

export const Logo = styled.img`
  width: 49px;
  height: 42px;
  margin-right: 12px;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  width: 65%;

  @media only screen and (max-width: 768px) {
    width: auto;
    justify-content:space-between;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    padding: 0;

    li {
      margin-bottom: 1rem;
    }
  }
  
  li {
    margin-right: 10px;
    font-size: 1rem;
    line-height: 1.22;
    color: #717171;
    cursor: pointer;

    &:hover {
      color: #3e3e3e;
    }
  }
`;