import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  async function enviarDados() {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await fetch(
        "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        {
          method: "POST",
          mode: "cors",
          body: formData,
        }
      );

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("nomeUsuario", data.user.name);
      localStorage.setItem("emailUsuario", data.user.email);

      navigate("/");

    } catch (error) {
      alert("Erro ao enviar dados");
      console.error(error);
    }
  }

  return (
    <form>
      <label>Email: {email}</label>
      <input
        type="text"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label>Senha: {password}</label>
      <input
        type="password"
        placeholder="Senha"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="button" onClick={enviarDados}>
        Entrar
      </button>
    </form>

    /* <Container variant>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>
            Endereço de e-mail
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Digite o seu e-mail"
              onChange={PegarEmail}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSenha">
          <Form.Label column sm={2}>
            Senha
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Digite a sua senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="FormBotoes">
          <Col sm={6}>
            <Button Col variant="primary" type="submit">
              Efetuar Login
            </Button>
          </Col>
          <Col sm={6}>
            <Button variant="secondary" type="button" onClick={enviarDados}>
              Cancelar Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container> */
  );
}

export { Login };
