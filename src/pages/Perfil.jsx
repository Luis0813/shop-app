import { useNavigate } from "react-router-dom";

export const Perfil = ({user}) => {
 const navigate = useNavigate()
 const cambiarRuta = (ruta) => {
   navigate(ruta)
 }
  if (!user) {
    return (
      <div className="profileContainer">
        <p>No se encontró usuario. Por favor, regístrate.</p>
        <button className='singInBtn' onClick={()=>cambiarRuta('/singIn')}>singIn</button>
      </div>
    );
  }

  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <img src="/perfil-light.png" alt="Perfil" className="profileImage" />
      </div>
      <div className="profileDetails">
        <p className="profileName">Perfil:{user.name} </p>
        <p className="profileEmail">Email:{user.email} </p>
        <p className="profilePurchases">Prendas compradas: 1</p>
      </div>
    </div>
  );
};