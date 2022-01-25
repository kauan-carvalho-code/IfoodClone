import { ReactNode, useState } from "react";
import { Header } from "../Header";
import { MobileMenu } from "../MobileMenu";
import { Container } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header handleClick={() => setIsOpen(true)} />
      <MobileMenu isOpen={isOpen}  handleClick={() => setIsOpen(false)} />
        <Container>
          {children}
        </Container>
    </>
  );
}

export default Layout;