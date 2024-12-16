import { useState } from "react";
import ApiService from "../libs/ApiService"

export const SingIn = () => {
  const [formData, setFormData] = useState({ 
    email: '',
    password: ''});
  
  const handleLogin = async (e) => {
    e.preventDefault()
    
    try {
     const {data} = await ApiService.post("/session", formData);
     console.log('Respuesta de la API:', data.access);
       
     if (data.access) {
       localStorage.setItem('token', data.access); 
       console.log('Token guardado en localStorage:', localStorage.getItem('token'));
     } else {
       console.error('Token no encontrado en la respuesta');
     }
      }catch (error) { 
         console.error(error);
     } 
   };
 
  
  return (
    <>
      <form className="form" action="" onSubmit={handleLogin}>
        <h2>Sing in</h2>
        <div className="contentForm">
          <label className="label" htmlFor="name">Username</label>
          <input className="input" type="text" placeholder="Name" id="name" name="name"/>

          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" name="email" placeholder="Email" id="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

          <label className="label" htmlFor="password">password</label>
          <input className="input" type="password" name="password" placeholder="Password" id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

          <button type="submit">Crear</button>
        </div>
      </form>
    </>
  )
}
