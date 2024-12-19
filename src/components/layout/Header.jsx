import React from "react"
import { useNavigate } from "react-router-dom"
export const Header = ({ setsearchValue }) => {

  const navigate = useNavigate()
  const cambiarRuta = (ruta) => {
    navigate(ruta)
  }

  return (
    <>
      <div>
        <div className='nota'>
          <p>NOTE: "Tenemos 20 % de decuento en mercancia de verano</p>
        </div>

        <div className='contenedorHeader'>
          <img src="/streetlevel-logo.png" alt="StrerLevel" className='logo' />
          <div className='content'>
            <input type="search" name="search" id="search" onChange={(e) => setsearchValue(e.target.value)} className="input" />
            <img className='searchBtn' src="/search-light.png" />
          </div>
          <div className='contenedorNavbar'>
            <div className='cajaNavbar'>
              <a className='navbar' href="" onClick={() => cambiarRuta("")}>All products</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Contact</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Accesories</a>
              <a className='navbar' href="#" onClick={() => cambiarRuta()}>Categories</a>
            </div>
            <div className='cajaBtn'>
              <img src='/perfil-light.png' className='perfilBtn' onClick={() => cambiarRuta("/perfil")}></img>
              <button className='carritoBtn' onClick={() => cambiarRuta("/carrito")}></button>
              <button className='singInBtn' onClick={() => cambiarRuta("/singIn")}>Sing in</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
