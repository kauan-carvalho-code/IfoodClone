import { About, Container, FindItOut, Logo, SocialContainer } from "./styles";

export function Footer() {
  return (
    <Container>
        <About>
          <li>
            <h3>Ifood</h3>
          </li>
          <li>
            <a>Site Institucional</a>
          </li>
          <li>
            <a>Fale conosco</a>
          </li>
          <li>
            <a>Carreiras</a>
          </li>
          <li>
            <a>iFood Colômbia</a>
          </li> 
        </About>
        <FindItOut>
          <li>
            <h3>Descubra</h3>
          </li>
          <li>
            <a>Cadastre seu Restaurante ou Mercado</a>
          </li>
          <li>
            <a>iFood Shop</a>
          </li>
          <li>
            <a>iFood Card</a>
          </li>
          <li>
            <a>Blog iFood Empresas</a>
          </li>
        </FindItOut>
        <SocialContainer>
          <h3>Social</h3>
          <div>
            <Logo src="assets/facebook-logo.svg" alt="Facebook"/>
            <Logo src="assets/twitter-logo.svg" alt="Twitter"/>
            <Logo src="assets/youtube-logo.svg" alt="Youtube"/>
            <Logo src="assets/instagram-logo.svg" alt="Instagram"/>
          </div>
        </SocialContainer>
    </Container>
  )
}