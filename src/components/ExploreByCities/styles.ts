import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    max-width: 100px;
  }

  h2 {
    letter-spacing: -1px;
    font-size: 1.25rem;
    color: #3e3e3e;
  }
`;

export const CitiesList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-area: list;
  grid-auto-flow: column;
  grid-gap: 24px;
  gap: 24px;
  margin-bottom: 24px;
  grid-template-rows: repeat(5,min-content);
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.22;
  color: #717171;
  font-weight: 600;

  a {
    cursor: pointer;
    transition: all .5s linear;

    &:hover {
      color: #3e3e3e;
    }
  }
`;