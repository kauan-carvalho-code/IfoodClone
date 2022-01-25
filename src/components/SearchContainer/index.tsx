import { Button } from "../Button";
import { Container, Content, SubTitle, Title, Form, SearchBar, SearchContent, LocationIcon } from "./styles";

export function SearchContainer() {
  return (
    <Container>
      <Content>
        <Title>Tudo pra facilitar seu dia a dia</Title>
        <SubTitle>O que você precisa está aqui. Peça e receba onde estiver.</SubTitle>
        <Form>
          <SearchContent>
            <LocationIcon src="assets/location.svg" alt="ícone de localização" />
            <SearchBar type="text" placeholder="Endereço de entrega e número"/>
          </SearchContent>
          <Button width="156" hover background="#ea1d2c">Buscar</Button>
        </Form>
      </Content>
    </Container>
  )
}