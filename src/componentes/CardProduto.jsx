import { Button, Card } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";

function CardProduto(nome, preco, urlImagem) {
  return (
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={urlImagem}
        className="product-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{nome}</Card.Title>
        <Card.Text>Preço: R${preco}</Card.Text>
        <Button
          variant="secondary"
          className="add-to-cart-btn"
        >
          <BsCartPlus size={20} />
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
