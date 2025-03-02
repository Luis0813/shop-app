import { useState } from "react";
import ApiService from "../libs/ApiService"
import {  setToken } from "../libs/AuthHelpers";
import { useNavigate } from "react-router-dom";

export const SingIn = ({setuser}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const cambiarRuta = (ruta) => {
    navigate(ruta)
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { data } = await ApiService.post("/session", formData);
      setuser(data)
      if (data.access) {
        setToken(data.access)
        return cambiarRuta('/')
      } else {
        console.error('Token no encontrado en la respuesta');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <form className="form" action="" onSubmit={handleLogin}>
        <h2 className="form-title">Sign In</h2>
        <div className="contentForm">
          <label className="label" htmlFor="name">Username</label>
          <input className="input singin" type="text" placeholder="Name" id="name" name="name" />

          <label className="label" htmlFor="email">Email</label>
          <input className="input singin" type="email" name="email" placeholder="Email" id="email"
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <label className="label" htmlFor="password">Password</label>
          <input className="input singin" type="password" name="password" placeholder="Password" id="password"
            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

          <button className="form-button" type="submit">Sign In</button>
        </div>
      </form>
    </>
  )
}
