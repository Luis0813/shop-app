import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from "./components/layout/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Carrito } from "./pages/Carrito";
import { Perfil } from "./pages/Perfil";
import { SingIn } from "./pages/SingIn";
import { Single } from "./pages/Single";
import { Orden } from './pages/Orden';
import { Modal } from './pages/Modal';
import { Admin } from './pages/Admin';
import { getToken } from './libs/AuthHelpers';
import ApiService from './libs/ApiService';
import './styles/App.css'
import { AdminCreated } from './pages/AdminCreated';


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
      {(location.pathname !== '/admin' && location.pathname !== '/adminCreated') && <Header setsearchValue={setsearchValue} />}
      <Routes>
        <Route path="/product/:id" element={<Single user={user} />} />
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/singIn" element={<SingIn setuser={setuser} />} />
        <Route path="/carrito" element={<Carrito user={user} />} />
        <Route path="/perfil" element={<Perfil user={user} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminCreated" element={<AdminCreated />} />
        <Route path="/hacer_orden" element={<Orden />} />
        <Route path="/modal/:id" element={<Modal />} />
      </Routes>
      {(location.pathname !== '/admin' && location.pathname !== '/adminCreated') && <Footer />}
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

