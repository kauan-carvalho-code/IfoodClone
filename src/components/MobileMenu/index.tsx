import { Button } from "../Button";
import { Container, Content, ExitIcon, Header, Logo, Navigation } from "./styles";

interface MobileMenuProps {
  isOpen: boolean;
  handleClick: () => void;
}

export function MobileMenu({isOpen, handleClick}: MobileMenuProps) {
  return (
      <Container className={isOpen && "isOpen"}>
        <Content className={isOpen && "isOpen"}>
          <Header>
            <Logo src="assets/ifoodLogo.svg" alt="logo do ifood"/>
            <ExitIcon onClick={handleClick} src="assets/exit.svg" alt="fechar mobile menu"/>
          </Header>
          <Navigation>
            <li>
              <a>Entregador</a>
            </li>
            <li>
              <a>Restaurante e Mercado</a>
            </li>
            <li>
              <a>Carreiras</a>
            </li>
            <li>
              <a>iFood Card</a>
            </li>
          </Navigation>
          <Button hover background="#ea1d2c">Entrar</Button>
          <Button className="create_account" background="#ffffff" color="#ea1d2c" hover>criar conta</Button>
        </Content>
      </Container>
  )
}