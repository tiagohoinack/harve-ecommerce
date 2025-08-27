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
    <div>
      <h1>Lista de Produtos</h1>
      <Container>
        <Row>
          {produtos.map((produto, idx) => (
            <Col key={idx} className="mb-3 h-100">
              {CardProduto(produto.title, produto.price, produto.image)}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { ListarProdutos };
