import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayaut(){
  // retotorna o objeto local atual
  //da acesso a algumas propriedades da pag atual
  const {pathname} = useLocation()

  return(
    <main>
      <h1>Stock Items</h1>
      <div className="tabs" >
        <Link to="items" 
        className={`tab ${pathname === "items" ? "active" : ""}`} 
        // style={{marginRight:"35px"}}
        >
          Todos os itens
        </Link>
        <Link to="/items/new" 
        className={`tab ${pathname === "/items/new" ? "active" : ""}`}
        >
          Novo item
        </Link>
      </div>
      <Outlet />
    </main>
  )
}