import { Button } from "../Button";
import { Banner, BannerContainer, Container, Content, Subtitle, Title } from "./styles";

export function FoodLoverBanner() {
  return (
    <Container>
      <Content>
        <Title>Você tem fome do quê?</Title>
        <Subtitle>Descubra como é ser um FoodLover e faça parte da nossa revolução!</Subtitle>
        <Button height="43" width="120" hover background="#ea1d2c">Saiba mais</Button>
      </Content>
      <BannerContainer>
        <Banner src="assets/food-lover-banner.webp" alt="Banner" />
      </BannerContainer>
    </Container>
  )
}