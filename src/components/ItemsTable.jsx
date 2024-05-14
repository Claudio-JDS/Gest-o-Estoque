import { Link } from "react-router-dom";
import useStock from "../hooks/useStock.js";
import { StockContext } from "../contexts/StockContext.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function ItemsTable() {
  //"items" -> desestruturado de stock do StockContext
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>DESCRIÇÃO</th>
          <th>ESTOQUE</th>
          <th>CATEGORIAS</th>
          <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td className="tdBtn">
              <Link to={`/items/${item.id}`} 
              className="btnver"
              >
                Ver
              </Link>
              <Link to={`/items/${item.id}/update`} className="btnAtualizar"
              >
                Atualizar
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}