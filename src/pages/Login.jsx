import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Card,
} from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  async function enviarDados(e) {
    e.preventDefault();
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

  function preencherTeste() {
    setEmail("alunos@teste.com");
    setPassword("123@123");
  }

  return (
    <div className="login-background">
      <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow p-4 rounded bg-white">
              <Card.Body>
                <h2 className="mb-4 text-center">Login</h2>
                <Form onSubmit={enviarDados}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite o seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formSenha">
                    <Form.Label>Senha</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite a sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {password && (
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword((prev) => !prev)}
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeSlashFill /> : <EyeFill />}
                        </Button>
                      )}
                    </InputGroup>
                  </Form.Group>
                  <div className="d-grid gap-2 mb-2">
                    <Button variant="primary" type="submit">
                      Realizar Login
                    </Button>
                  </div>
                  <div className="d-grid gap-2 mb-2">
                    <Button
                      variant="outline-dark"
                      type="button"
                      onClick={preencherTeste}
                    >
                      Preencher dados de acesso de teste
                    </Button>
                  </div>
                  <div className="d-grid gap-2">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Cancelar Login
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="login-rodape">
        <span style={{ marginRight: 16 }}>
          <strong>Usuário:</strong> alunos@teste.com
        </span>
        <span>
          <strong>Senha:</strong> 123@123
        </span>
      </div>
    </div>
  );
}

export { Login };
