import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import ItemForm from "../../components/ItemForm"

export default function UpdateItem() {

  //"useStock" -> retorna a chamda do useContext
  const { getItem } = useStock()

  //useParams -> vai devolver os parametros da URL
  //id -> é o parametro passado em router
  const { id } = useParams()

  //O getItem(id) da acesso ao item
  const item = getItem(id)

  return (
    <>
      <h2>Atualizar Item - {item.name}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  )
}