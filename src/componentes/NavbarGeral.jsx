import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GerenciarLogin } from "./GerenciarLogin";
import { FaHome, FaShoppingBag, FaShoppingCart, FaStore } from 'react-icons/fa';

function NavbarGeral(props) {
  return (
    <>
      <Navbar data-bs-theme="light" bg="light" className="shadow-sm">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <FaStore className="me-2" size={24} />
            E-Commerce Harve
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="d-flex align-items-center">
              <FaHome className="me-1" /> Início
            </Nav.Link>
            <Nav.Link href="/produtos" className="d-flex align-items-center">
              <FaShoppingBag className="me-1" /> Produtos
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="/carrinho" className="d-flex align-items-center">
              <FaShoppingCart className="me-1" /> Carrinho
            </Nav.Link>
            <GerenciarLogin />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export { NavbarGeral };
