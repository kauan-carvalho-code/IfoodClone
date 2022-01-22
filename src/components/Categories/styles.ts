import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .mySwiper {
    display: flex;
    max-width: 842px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 18px 0 25px;
    position: relative;
    padding: 0 22px;
    height: 160px;

    @media only screen and (max-width: 960px) {
    height: 130px;
    }

    @media only screen and (max-width: 768px) {
      align-items: center;
      margin: 0;
      height: 85px;
      margin: 25px 0;
      max-width: 670px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 842px;

  &::before {
    position: absolute;
    content: "";
    width: 100vw;
    height: 50%;
    background-color: #f7f7f7;
    z-index: -1;
    left: 0;
    bottom: 50%;
    transform: translateY(-50%);
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 214px;
  width: 100%;

  @media only screen and (max-width: 960px) {
    height: 180px;
  }
`;