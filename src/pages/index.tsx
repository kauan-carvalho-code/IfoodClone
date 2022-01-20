import styled from "styled-components";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import Layout from "../components/Layout";
import { SearchContainer } from "../components/SearchContainer";

const Main = styled.main`
padding: 0;
transition: .5s;
`;

export const MainContent =  styled.div`
  max-width: 1278px !important;
  margin: 0 auto;
`;


export default function Home() {
  return (
    <Layout>
      <SearchContainer />
      <Categories />
      <Main>
        <MainContent>
          <Carousel title="Os melhores restaurantes" />
        </MainContent>
      </Main>
    </Layout>
  )
}