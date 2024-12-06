import './styles/App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useState } from 'react'
import { Body } from './components/Body'
function App() {
  const [estado, setestado] = useState("all")
  const [searchValue, setsearchValue] = useState('')
  return (
    <>
      <div className='content'>
        <input type="search" name="search" id="search" onChange={()=>setsearchValue(search.value)}className="input"/>
        <Header estado={estado} setestado={setestado} />
      </div>
      <Body estado={estado} searchValue={searchValue}/> 
      <Footer/>
    </>
  )
}

export default App
