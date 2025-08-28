//Página responsável por listar todos os produtos do portal

import { ListarProdutos } from "../componentes/ListarProdutos";

function Produtos() {
  return (
    <div className="page-container">
      <ListarProdutos />
    </div>
  );
}

export { Produtos };
