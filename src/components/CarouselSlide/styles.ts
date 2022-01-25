import styled from "styled-components";

export const Slide = styled.div`
  width: 100%;
  height: 90%;
  cursor: pointer;
  display: flex;
`;

export const Link = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  padding: 0 16px;

  transition: border-color .5s linear;

  &:hover {
    border-color: #9A9483
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #dcdcdc;

  @media only screen and (max-width: 1260px) {
    width: 46px;
    height: 46px;
  }
`;

export const About = styled.div`
  margin: 0 0 0 10px;

  h3 {
    margin: 0;
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: #1a1a1a;
  }

  p {
    margin: 2px 0 0;
    font-size: .75rem;
    line-height: 1rem;
    color: #717171;
  }
`;

export const Checked = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: 8px;
  display: flex;
  width: 100%;

  .checked_badge {
    font-weight: 500;
    position: relative;
    right: 16px;
    padding: 2px;
    font-size: .875rem;
    line-height: 1;
    text-align: right;
    width: 13;
    height: 13;
    vertical-align: bottom;
    margin-left: auto;
  }

  .checked_tooltip {
    background: #f2f2f2;
    border-radius: 4px;
    position: absolute;
    width: 81%;
    top: 24px;
    left: 0;
    display: block;
    color: #717171;
    font-weight: 300;
    font-size: .75rem;
    line-height: 1rem;
    padding: 8px 14px;
    z-index: 1;
    transform: translateY(0);
    text-align: center;
    visibility: hidden;
    opacity: 0;
    

    &::before {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #f2f2f2;
      position: absolute;
      right: 4px;
      top: -5px;
    }
  }

  span.checked_badge:hover + span.checked_tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const CheckedIcon = styled.img`

`;