import { useNavigate } from 'react-router-dom';
import { Buscar, Carrito, Perfil } from '../Icons';
import PrymaryButton from '../PrymaryButton';

export const Header = ({ setsearchValue }) => {
  const navigate = useNavigate();
  const cambiarRuta = (ruta) => {
    navigate(ruta);
  };

  return (
    <>
      <div>
        <div className='contenedorHeader'>
          <img src='/streetlevel-logo.png' alt='StrerLevel' className='logo' />
          <div className='content'>
            <input
              type='search'
              name='search'
              id='search'
              onChange={(e) => setsearchValue(e.target.value)}
              className='input'
            />
            <p className='searchBtn'>
              <Buscar />
            </p>
          </div>
          <div className='contenedorNavbar'>
            <div className='cajaNavbar'>
              <a className='navbar' onClick={() => cambiarRuta('')}>
                All products
              </a>
              <a className='navbar' href='#' onClick={() => cambiarRuta()}>
                Contact
              </a>
              <a className='navbar' href='#' onClick={() => cambiarRuta()}>
                Accesories
              </a>
              <a className='navbar' href='#' onClick={() => cambiarRuta()}>
                Categories
              </a>
            </div>
            <div className='cajaBtn'>
              <p className='perfilBtn' onClick={() => cambiarRuta('/perfil')}>
                <Perfil />
              </p>
              <p className='carritoBtn' onClick={() => cambiarRuta('/carrito')}>
                <Carrito />
              </p>
              <div onClick={() => cambiarRuta('/singIn')}>
                <PrymaryButton>Sing In</PrymaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
