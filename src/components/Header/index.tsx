import { Button } from "../Button";
import { Bars, BarsContainer, Container, ButtonContainer, Content, Logo, LogoContainer, NavContainer, Navigation } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <NavContainer>
          <BarsContainer>
          <Bars src="assets/threeBars.svg" alt="botão da sidebar"/>
          </BarsContainer>
          <LogoContainer>
            <Logo src="assets/ifoodLogo.svg" alt="logo do ifood"/>
          </LogoContainer>
          <Navigation>
            <a>Entregador</a>
            <a>Restaurante e Mercado</a>
            <a>Carreiras</a>
            <a>iFood Card</a>
          </Navigation>
        </NavContainer>
        <ButtonContainer>
          <Button background="#f7f7f7" color="#ea1d2c">criar conta</Button>
          <Button hover background="#ea1d2c">Entrar</Button>
        </ButtonContainer>
      </Content>
    </Container>
  )
}