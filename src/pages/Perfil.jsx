
export const Perfil = ({user}) => {
  if (!user) {
    return (
      <div className="profileContainer">
        <p>No se encontró usuario. Por favor, regístrate.</p>
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