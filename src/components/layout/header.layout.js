import React from 'react';
import '../assets/css/header.layout.css'
import ProgressBar from '../progress-bar';
import {Link} from 'react-router-dom';
const HeaderLayout = () => {
    return(
        <header className="header">
            <div className="header-title">
            <Link style={{textDecoration:'none'}}to={`/`}>Ejercicios de Lógica y Programación</Link>
               
            </div>
           <nav className="navigation">
               <ProgressBar/>
           </nav>
            
        </header>
    )
}
export default HeaderLayout;