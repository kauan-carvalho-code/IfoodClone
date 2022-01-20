import { CarouselCard } from "../CarouselCard";
import { CategoryCard } from "../CategoryCard";
import { Carousel, Container, Wrapper, WrapperContent } from "./styles";

export function Categories() {
  return (
    <Container>
      <Wrapper>
        <WrapperContent>
          <CategoryCard 
            title="Restaurante" 
            option="Ver opções" 
            color="#ea1d2c" 
            optionColor="#cc1825"
            image="assets/hamburguer.webp"
          />
          <CategoryCard 
            title="Mercado" 
            option="Buscar lojas" 
            color="#b6d048;" 
            optionColor="#9eb53e"
            image="assets/shoppingcart.webp"
            />
        </WrapperContent>
      </Wrapper>
      <Carousel>
        <CarouselCard option="Bebidas" className="drinks" image="assets/drinks.webp" background="#f6d553" />
        <CarouselCard option="Farmácia" className="pharmacy" image="assets/pharmacy.webp" background="#f9879c" />
        <CarouselCard option="Express" className="express" image="assets/express.webp" background="#ea1d2c" />
        <CarouselCard option="Pet shop" className="petshop" image="assets/petshop.webp" background="#8c60c5" />
      </Carousel>
    </Container>
  )
}