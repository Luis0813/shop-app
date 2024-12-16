import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from "./components/layout/Header";
import { Body } from './components/layout/Body'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Carrito } from "./pages/Carrito";
import { Perfil } from "./pages/Perfil";
import { SingIn } from "./pages/SingIn";
import { CardSelect } from "./pages/Single";
import ApiService from './libs/ApiService';
import './styles/App.css'

function App() {
  const [searchValue, setsearchValue] = useState('')    

  return (
    <BrowserRouter>
      <Header setsearchValue={setsearchValue} />
      <Routes>
        <Route path="/" element={
          <Home searchValue={searchValue} />}
        />
        <Route path="/product/:id" element={
          <CardSelect />}
        />
        <Route path="/singIn" element={<SingIn />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Body searchValue={searchValue} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
