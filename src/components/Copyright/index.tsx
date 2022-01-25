import { Container, Logo, Navigation } from "./styles";

export function Copyright() {
  return (
    <Container>
      <Logo src="assets/footer-ifood-icon.svg" alt="Ifood"/>
      <p>
      © Copyright 2022 - Feita por Kauan Carvalho - Cópia meramente ilustrativa da página do Ifood<br/>GITHUB: https://kcda1102.github.io/<br/>ME MANDA UM PIX: kauancarvalho987@gmail.com
      </p>
      <Navigation>
        <li>
          <a>Termos e condições de uso</a>
        </li>
        <li>
          <a>Código de conduta</a>
        </li>
        <li>
          <a>Privacidade</a>
        </li>
        <li>
          <a>Dicas de segurança</a>
        </li>
      </Navigation>
    </Container>
  )
}