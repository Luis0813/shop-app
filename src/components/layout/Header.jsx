import React from "react"
import { useNavigate } from "react-router-dom"

export const Header = ({setsearchValue}) => {
  
  const navigate = useNavigate()

  const cambiarRuta = (ruta) => {
    navigate(ruta)
  }
  return (
    <>
      <div>
        <div className='nota'>
          <p>NOTE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi non rem the coffer asdmafmvm;lma;sf</p>
        </div>
       
        <div className='contenedorHeader'>
          <img src="../../public/streetlevel.jpg" alt="StrerLevel" className='logo' />
          <div className='content'>
          <input type="search" name="search" id="search" onChange={(e) => setsearchValue(e.target.value)} className="input" />
              <button className='searchBtn'></button>
        </div>
          <div className='contenedorNavbar'>
            <div className='cajaNavbar'>
              <a className='navbar' href="" onClick={() => cambiarRuta("")}>All products</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Contact</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Accesories</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Categories</a>
            </div>
            <div className='cajaBtn'>
              <button className='perfilBtn' onClick={() => cambiarRuta("/perfil")}></button>
              <button className='carritoBtn' onClick={() => cambiarRuta("/carrito")}></button>
              <button className='singInBtn' onClick={() => cambiarRuta("/singIn")}>Sing in</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
