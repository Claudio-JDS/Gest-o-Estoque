import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

// StockContextProvider.PropTypes = {
//   children: PropTypes.node
// }


////O children permite que o componente tenha acesso a todas as propriedades dos componentes
export function StockContextProvider({children}){
  //o items começa verificando se tem algum dado salvo no local storange
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('react-stock')
    //se não tiver dados armazenados no localStorage retornar um array vazio
    if(!storedItems) return []
    //se tiver dados retorna para ser valor inicial do state
    const items = JSON.parse(storedItems)
    items.forEach((item) => {
       item.createdAt = new Date(item.createdAt);
       item.updatedAte = new Date(item.updatedAte);
    });
     return items
  })

  const addItem = (item) => {
    setItems(currentState => {
      const createItems = [item, ...currentState]
      //salvando no localStorage
      localStorage.setItem('react-stock', JSON.stringify(createItems))
      //retonando o valor e atualizando o state
      return createItems
    })
  }

  const getItem = (itemId) => {
    return items.find(item => item.id === +itemId)
  }

  const updateItem = (itemId, newAttributes) =>{
    setItems(currentState => {
      const itemIndex = currentState.findIndex(item => item.id === +itemId)
      const updateItems = [...currentState]
      Object.assign(updateItems[itemIndex], newAttributes, {updatedAt: new Date()})
      localStorage.setItem('react-stock', JSON.stringify(updateItems))
      return updateItems
    })
  }

  const deleteItem = (itemId) =>{
    setItems (currentState => {
      const updateItems = currentState.filter(
        item => item.id !== itemId
      )
      localStorage.setItem('react-stock', JSON.stringify(updateItems))
      return updateItems
    })
  }

  //O "stock" vai ser o valor do provedor fazendo com que os componentes tenha acesso as funções
  const stock = {
    items, 
    addItem,
    getItem,
    updateItem,
    deleteItem
  }

  return (
    //Elemento provedor faz com que a aplicação tenha tenha acesso a toda a informação e valores dos componentes
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )

  //dados do item jogado dentro do array
  //{name, description, quantity, price, category, creatDate, updateDate}

}