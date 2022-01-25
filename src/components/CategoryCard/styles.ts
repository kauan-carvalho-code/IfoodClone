import styled from "styled-components";

interface ContentProps {
  color?: string;
}

interface OptionsProps {
  optionColor: string;
}

export const Container = styled.div`
  width: 48%;
  transition: opacity 1.5s ease;
  height: 100%;
  cursor: pointer;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  border-radius: 20px;
  text-align: center;
  background: ${({color}) => color ? color :  "#000000"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;

export const Category = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    width: 80%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.p`
  font-size: 2.25rem;
  font-weight: 600;
  margin: 0 0 10px;
  line-height: 0.8rem;

  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
`;

export const FigureContainer = styled.figure`
  overflow: hidden;
  position: absolute;
  right: -14px;
  width: 62%;
  height: auto;
  bottom: -3px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    height: 75px;
    width: 90%;
    bottom: 8px;
    overflow: hidden;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

export const Figure = styled.img`
  object-fit: contain;
  resize: auto;
  height: 100%;
  width: 100%;
  border: 0;

  @media only screen and (max-width: 768px) {
    height: 75px;
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
  }
`;

export const Options = styled.div<OptionsProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 36px;
  background: ${({optionColor}) => optionColor ? optionColor :  "#000000"};
  border-radius: 12px;
  width: 118px;
  font-weight: 500;
  padding: 0 12px;
  color: #fff;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
`;
