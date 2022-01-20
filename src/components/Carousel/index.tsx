import { CarouselContent, Container, CarouselSlide, Title, Link, Logo, About, Checked } from "./styles";

interface CarouselProps {
  title: string;
}

export function Carousel({title}: CarouselProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <CarouselContent>
        <CarouselSlide>
          <Link>
            <Logo />
            <About>
              <h3>Name</h3>
              <p>Category</p>
            </About>
            <Checked>
              <span></span>
            </Checked>
          </Link>
        </CarouselSlide>
      </CarouselContent>
    </Container>
  )
}