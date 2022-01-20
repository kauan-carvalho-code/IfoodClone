import { Container, FigureContainer, Figure, Option } from "./styles";
import { IoIosArrowForward } from "react-icons/io";

interface CarouselCardProps {
  option: string;
  image: string;
  background: string;
}

export function CarouselCard({option, image, background}: CarouselCardProps) {
  return (
    <Container>
      <FigureContainer background={background}>
        <Figure src={image} alt={option}/>
      </FigureContainer>
      <Option>{option}<IoIosArrowForward/></Option>
    </Container>
  )
}