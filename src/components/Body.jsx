import { All } from "./body/All"
import { Carrito } from "./body/Carrito";
import { Perfil } from "./body/Perfil";
import { SingIn } from "./body/SingIn";
export const Body = ({estado, searchValue}) => {
 
  
  return (
    <>
        {estado === 'sing in' ? <SingIn /> : null}
        {estado === 'perfil' ? <Perfil/> : null}
        {estado === 'carrito' ? <Carrito /> : null}
        {estado === 'all' ? <All searchValue={searchValue} /> : null}
    </>
  )
}
