import { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";

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
        <Button variant="secondary" href="/Login">
          Login
        </Button>
        {/* <Nav.Link href="/Login">Login</Nav.Link> */}
      </>
    );
  }

  return (
    <>
      <Nav.Link eventKey="disabled" disabled>
        {nome} ({email})
      </Nav.Link>
      <Button variant="secondary" onClick={sair}>
        Sair
      </Button>
    </>
  );
}

export { GerenciarLogin };
