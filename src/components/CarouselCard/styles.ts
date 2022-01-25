import styled from "styled-components";

interface FigureContainerProps {
  background?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FigureContainer = styled.div<FigureContainerProps>`
  background: ${({background}) => background ? background : "#000000"};
  width: 188px;
  height: 47px;
  border-radius: 6px;
  position: relative;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 960px) {
    width: 150px;
    height: 38px;
  }

  @media only screen and (max-width: 768px) {
    width: 96px;
    height: 24px;
  }
`;

export const Figure = styled.img`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  border: 0;

  &.drinks {
    width: 140px;
  }

  &.pharmacy {
    width: 100px;
  }

  &.express {
    width: 96px;
  }

  &.petshop {
    width: 135px;
  }

  @media only screen and (max-width: 960px) {
      &.drinks {
        width: 120px;
      }
      &.pharmacy {
        width: 82px;
      }
      &.express {
        width: 80px;
      }
      &.petshop {
        width: 110px;
      }
    }

  @media only screen and (max-width: 768px) {
      &.drinks {
        width: 74px;
      }
      &.pharmacy {
        width: 56px;
      }
      &.express {
        width: 54px;
      }
      &.petshop {
        width: 70px;
      }
    }
`;

export const Option = styled.p`
  display: flex;
  align-items: center;
  margin: 12px 0 0;

  color: #1a1a1a;
  font-weight: 600;

  svg {
    color: #ea1d2c;
  }
`;