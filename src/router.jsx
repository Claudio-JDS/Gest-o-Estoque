import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import ItemsLayaut from "./pages/items/ItemsLayaut"
import ListItems from "./pages/items/ListItems"
import CreateItem from "./pages/items/CreateItems"
import ShowItem from "./pages/items/ShowItem"
import UpdateItem from "./pages/items/UpdateItem"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {index: true, element: <Home />},
      {
        // Pag itens(estoque)
        path: "items", 
        element: <ItemsLayaut />,
        children: [
          {index: true, element: <ListItems/>},
          {path: "new", element: <CreateItem/>},
          // ":" para torna o caminho dinamico baseado no id
          {path: ":id", element: <ShowItem/>},
          {path: ":id/update", element: <UpdateItem/>}
        ]
      }
    ]
  }
])

export default router