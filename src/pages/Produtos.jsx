//Página responsável por listar todos os produtos do portal

import { ListarProdutos } from "../componentes/ListarProdutos";
import { NavbarGeral } from "../componentes/NavbarGeral";

function Produtos() {
  return (
    <div>
      <NavbarGeral />
        <ListarProdutos />
    </div>
  );
}

export { Produtos };
