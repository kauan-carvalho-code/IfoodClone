import { ICities } from "../../types";
import { Button } from "../Button";
import { CitiesList, Container, Header, ListItem } from "./styles";

interface ExploreByCitiesProps {
  cities: ICities[];
}

export function ExploreByCities({cities}: ExploreByCitiesProps) {
  return (
    <Container>
      <Header>
        <h2>Explore por cidades</h2>
        <Button background="#fff" color="#ea1d2c">Ver todas</Button>
      </Header>
      <CitiesList>
        {
           cities.map(city => (
             <ListItem key={city.id}>
               <a>{city.name}</a>
             </ListItem>
           ))
        }
       </CitiesList>
    </Container>
  )
}