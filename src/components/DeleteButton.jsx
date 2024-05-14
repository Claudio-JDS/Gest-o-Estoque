import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"
import PropTypes from "prop-types"

DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired
}

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock()

  //useNavigate -> redirecionamento de página
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId)

      //redireciona para tela de itens
      navigate("/items")
    }
  }

  return (
    <button
    className="btnADelete"
    onClick={handleDelete}
  >
    Excluir
  </button>
  )
}