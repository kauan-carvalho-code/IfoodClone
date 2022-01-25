import { ThinBanner, Container, ThickBanner } from "./styles";

export function FullPageBanner() {
  return (
    <Container>
      <ThinBanner src="assets/ifood-benefits-desktop.webp" alt="Banner"/>
      <ThickBanner src="assets/ifood-benefits-mobile.webp" alt="Banner"/>
    </Container>
  )
}