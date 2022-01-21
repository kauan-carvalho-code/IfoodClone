import { About, Checked, CheckedIcon, Link, Logo, Slide } from "./styles";

interface CarouselSlideProps {
  checked?: boolean;
  icon: string;
  name: string;
  category: string;
}

export function CarouselSlide({ checked, icon, name, category }: CarouselSlideProps) {
  return (
    <Slide className="swiper_slide">
      <Link>
        <Logo src={icon} alt={name} />
        <About>
          <h3>{name}</h3>
          <p>{category}</p>
        </About>
        {
        !!checked && 
          <Checked>
            <span className="checked_badge"><CheckedIcon src="assets/checked.svg" alt="Restaurante checado"/></span>
            <span className="checked_tooltip">Esta loja é uma das campeãs do iFood em qualidade de serviço.</span>
          </Checked>
        }
      </Link>
    </Slide>
  )
}