import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"

export default function ShowItem() {

  //"useStock" -> retorna a chamda do useContext
  const { getItem } = useStock()
  
  //useParams -> vai devolver os parametros da URL
  //id -> é o parametro passado em router
  const { id } = useParams()

  //O getItem(id) da acesso ao item
  const item = getItem(id)

  return (
    <div className="item">
      <div className="itemBtn">
        <h2>{item.name}</h2>
        <Link 
          to={`/items/${item.id}/update`} className="btnAtualizar"
        >
          Atualizar
        </Link>
        <DeleteButton 
          itemId={item.id} 
          itemName={item.name} 
        />
      </div>
      <div className="row">
        <span>Categoria: {item.category}</span>
        <span>Quantidade em estoque: {item.quantity}</span>
        <span>Preço: R$ {item.price}</span>
      </div>
      <p>{item.description}</p>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        {/* <p>Atualizado em: {item.updatedAt.toDateString()}</p> */}
      </div>
    </div>
  )
}