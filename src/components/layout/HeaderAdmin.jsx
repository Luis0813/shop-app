import React from 'react'

export const HeaderAdmin = ({theme,setTheme}) => {
  const toggleTheme = () => {
     const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
     };

  return (
    <div className='contentBtnAdmin'> 
            <img src={`/search-${theme}.png`} className='btnSearch' alt="" />
            <img src={`/tema-${theme}.png`}  className='btnCambiarTema' onClick={toggleTheme}/>
            <img src={`/estadistica-${theme}.png`} className='btnEstadisticas'/>
            <img src={`/notificacion-${theme}.png`} className='btnNotfication'/>  
    </div>
  )
}
