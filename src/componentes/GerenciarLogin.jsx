import { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

function GerenciarLogin(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  function buscarUsuario() {
    const nomeusuario = localStorage.getItem("nomeUsuario");
    const emailusuario = localStorage.getItem("emailUsuario");
    const token = localStorage.getItem("token");
    setEmail(emailusuario);
    setNome(nomeusuario);
    setToken(token);
  }
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");
    window.location.reload();
  }

  useEffect(() => {
    buscarUsuario();
  }, []);

  if (!token) {
    return (
      <>
        <Button variant="secondary" href="/Login" className="d-flex align-items-center gap-2">
          <FaSignInAlt /> Login
        </Button>
      </>
    );
  }

  return (
    <>
      <Nav.Link eventKey="disabled" disabled className="d-flex align-items-center">
        <FaUser className="me-1" /> {nome} ({email})
      </Nav.Link>
      <Button variant="secondary" onClick={sair} className="d-flex align-items-center gap-2">
        <FaSignOutAlt /> Sair
      </Button>
    </>
  );
}

export { GerenciarLogin };
