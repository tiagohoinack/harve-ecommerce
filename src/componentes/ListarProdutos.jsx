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
        {produtos.map((produto) => {
          CardProduto(produto.title, produto.price, produto.image)
        })}
          {/* <div>
           <img src={produto.image} alt={produto.title} width={200} />
           <p>Nome: {produto.title}</p>
           <p>Preço: {produto.price}</p>
           <hr />
        </div> */}
      </Container>
    </div>
  );
}

export { ListarProdutos };
