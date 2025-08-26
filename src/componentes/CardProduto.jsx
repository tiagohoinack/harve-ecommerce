import { Button, Card, Col } from "react-bootstrap";

function CardProduto(nome, preco, urlImagem) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={urlImagem} />
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>Preço: R${preco}</Card.Text>
          <Button variant="primary">Ver Produto</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export { CardProduto };
