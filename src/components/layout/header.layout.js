import React from 'react';
import '../assets/css/header.layout.css'
import ProgressBar from '../progress-bar';
const HeaderLayout = () => {
    return(
        <header className="header">
            <div className="header-title">
                <a href="">Ejercicios de Lógica y Programación</a>
            </div>
           <nav className="navigation">
               <ProgressBar/>
           </nav>
            
        </header>
    )
}
export default HeaderLayout;