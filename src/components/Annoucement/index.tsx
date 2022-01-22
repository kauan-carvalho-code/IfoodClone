import { Button } from "../Button";
import { Container, Content, Figure, FigureContainer, Subtitle, Title } from "./styles";

interface AnnoucementProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Annoucement({title, subtitle, image}:  AnnoucementProps) {
  return (
    <Container>
      <FigureContainer>
        <Figure src={image} alt="Annoucement"/>
      </FigureContainer>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button width="138" height="48" background="#ea1d2c" hover>Saiba mais</Button>
      </Content>
    </Container>
  )
}