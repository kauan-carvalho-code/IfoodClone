import styled from "styled-components";

interface FigureContainerProps {
  background?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 160px;
  width: auto;
  cursor: pointer;
`;

export const FigureContainer = styled.div<FigureContainerProps>`
  background: ${({background}) => background ? background : "#000000"};
  width: 188px;
  height: 47px;
  border-radius: 6px;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Figure = styled.img`
  position: absolute;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
`;

export const Option = styled.p`
  display: flex;
  align-items: center;
  margin: 12px 0 0;

  svg {
    color: #ea1d2c;
  }
`;