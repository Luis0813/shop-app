import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from "./components/layout/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Carrito } from "./pages/Carrito";
import { Perfil } from "./pages/Perfil";
import { SingIn } from "./pages/SingIn";
import { CardSelect } from "./pages/Single";
import { Admin } from './pages/Admin';
import './styles/App.css'
import { getToken } from './libs/AuthHelpers';
import ApiService from './libs/ApiService';


const AppContent = () => {
  const [searchValue, setsearchValue] = useState('');
  const [user, setuser] = useState(null)
  const [cargandoUser, setcargandoUser] = useState(true)
  const location = useLocation();
  useEffect(() => {
    const cargarUser = async () => {
      if (!getToken) {
        return
      }
      try {
        const { data } = await ApiService.get("/session/verify")
        setuser(data)
        setcargandoUser(false)
      } catch (error) {
        console.log(error);

      }
    }

    cargarUser()
  }, [])

  return (
    <>
      {location.pathname !== '/admin' && <Header setsearchValue={setsearchValue} />}
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/product/:id" element={<CardSelect />} />
        <Route path="/singIn" element={<SingIn setuser={setuser}/>} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/perfil" element={<Perfil user={user} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {location.pathname !== '/admin' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

