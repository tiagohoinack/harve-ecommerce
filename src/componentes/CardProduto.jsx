import { Button, Card } from "react-bootstrap";

function CardProduto(nome, preco, urlImagem) {
  return (
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={urlImagem} />
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>Preço: R${preco}</Card.Text>
          <Button variant="primary">Adicionar ao Carrinho</Button>
        </Card.Body>
      </Card>
  );
}

export { CardProduto };
