import { Container, FigureContainer, Figure, Option } from "./styles";
import { IoIosArrowForward } from "react-icons/io";

interface CarouselCardProps {
  option: string;
  image: string;
  background: string;
  className?: string;
}

export function CarouselCard({option, image, background, className}: CarouselCardProps) {
  return (
    <Container>
      <FigureContainer background={background}>
        <Figure src={image} alt={option} className={className}/>
      </FigureContainer>
      <Option>{option}<IoIosArrowForward/></Option>
    </Container>
  )
}