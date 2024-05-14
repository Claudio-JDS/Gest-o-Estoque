import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export default function useStock (){
  //retorna a chamda do useContext para o "StockContext"
  return useContext(StockContext)
}
