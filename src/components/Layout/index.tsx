import { ReactNode } from "react";
import { Header } from "../Header";
import { Container } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
          {children}
      </Container>
    </>
  );
}

export default Layout;