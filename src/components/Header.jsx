import { Body } from "./Body";
import { useState } from "react"

export const Header = () => {
  const [estado, setestado] = useState("all")
  const [searchValue, setsearchValue] = useState('')

  return (
    <>
    <div>
        <div className='nota'>
            <p>NOTE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi non rem the coffer asdmafmvm;lma;sf</p>
            <input type="search" name="search" id="search" onChange={()=>setsearchValue(search.value)}className="input"/>
        </div>
        <div className='contenedorHeader'>
            <img src="../../public/streetlevel.jpg" alt="StrerLevel" className='logo'/>
            <div className='contenedorNavbar'>
              <div className='cajaNavbar'>
                    <a onClick={()=>setestado('all')} className='navbar' href="#">All products</a>
                    <a className='navbar' href="#">Contact</a>
                    <a className='navbar' href="#">Accesories</a>
                    <a className='navbar' href="#">Categories</a>
              </div>
              <div className='cajaBtn'>
                  <button className='searchBtn' ></button>
                  <button onClick={()=>setestado('perfil')} className='perfilBtn'></button>
                  <button onClick={()=>setestado('carrito')} className='carritoBtn'></button>
                  <button onClick={()=>setestado('sing in')} className='singInBtn'>Sing in</button>
              </div>
            </div>
        </div>
    </div>
     <Body estado={estado} searchValue={searchValue}/> 
    </>
  )
}
