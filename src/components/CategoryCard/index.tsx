import { Category, Container, Content, Title, FigureContainer, Figure, Options, ArrowContainer} from "./styles";
import { IoIosArrowForward } from "react-icons/io";

interface CategoryCardProps {
  title: string;
  option: string;
  color?: string;
  optionColor?: string;
  image?: string;
}

export function CategoryCard({title, option, color, optionColor, image}: CategoryCardProps) {
  return (
    <Container>
      <Content color={color}>
        <Category>
          <Title>{title}</Title>
          <FigureContainer>
            <Figure src={image} alt={title}/>
          </FigureContainer>
          <Options optionColor={optionColor} >
            {option}
            <ArrowContainer>
              <IoIosArrowForward />
            </ArrowContainer>
          </Options>
        </Category>
      </Content>
    </Container>
  )
}