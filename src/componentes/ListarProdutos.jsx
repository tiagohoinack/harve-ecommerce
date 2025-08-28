import { useEffect, useState } from "react";
import api from "../_service/api";
import { Col, Container, Row } from "react-bootstrap";
import { CardProduto } from "./CardProduto";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  async function BuscarProdutos() {
    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (errors) {
      console.error("Erro ao buscar produtos");
    }
  }

  useEffect(() => {
    BuscarProdutos();
  }, []);

  return (
    <div className="content-card">
      <Container>
        <h1 className="produtos-title">Lista de Produtos</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {produtos.map((produto, idx) => (
            <Col key={idx}>
              <div className="h-100 px-2">
                {CardProduto(produto.title, produto.price, produto.image)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { ListarProdutos };
