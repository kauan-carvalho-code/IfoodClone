import { Categories } from "../components/Categories";
import Layout from "../components/Layout";
import { SearchContainer } from "../components/SearchContainer";

export default function Home() {
  return (
    <Layout>
      <SearchContainer />
      <Categories />
    </Layout>
  )
}