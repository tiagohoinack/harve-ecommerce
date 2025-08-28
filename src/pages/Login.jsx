import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
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
    <div className="page-container">
      <div className="content-card" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Card>
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
                <Button 
                  variant="secondary" 
                  type="submit"
                  style={{ 
                    backgroundColor: 'var(--secondary-bg)', 
                    borderColor: 'var(--secondary-bg)',
                    color: '#fff'
                  }}
                >
                  Realizar Login
                </Button>
              </div>
              <div className="d-grid gap-2 mb-2">
                <Button
                  variant="dark"
                  type="button"
                  onClick={preencherTeste}
                  style={{ 
                    backgroundColor: '#212529', 
                    borderColor: '#212529'
                  }}
                >
                  Preencher dados de acesso de teste
                </Button>
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="light"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  Cancelar Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export { Login };
