import { Button } from "../Button";
import { Bars, BarsContainer, ButtonContainer, Container, Content, Logo, LogoContainer, NavContainer, Navigation } from "./styles";

interface HeaderProps {
  handleClick: () => void;
}

export function Header({handleClick}: HeaderProps) {
  return (
    <Container>
      <Content>
        <NavContainer>
          <BarsContainer onClick={handleClick}>
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
          <Button className="create_account" background="#f7f7f7" color="#ea1d2c">criar conta</Button>
          <Button hover background="#ea1d2c">Entrar</Button>
        </ButtonContainer>
      </Content>
    </Container>
  )
}