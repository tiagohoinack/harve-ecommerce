import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GerenciarLogin } from "./GerenciarLogin";

function NavbarGeral(props) {
  
  return (
    <>
      <Navbar data-bs-theme="light" bg="light">
        <Container>
          <Navbar.Brand>E-Commerce Harve</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
            <GerenciarLogin />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export { NavbarGeral };
