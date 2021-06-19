import React from 'react'

const BubbleContainer = () => {

    return (
        <div className="bubble-container">
            <div className="bubble">
                <p className="bubble-paragraph">Hola! 😊 La idea principal de este proyecto, es poner a prueba mi lógica de programación. Toda la parte visual que observas (Frontend), fue realizado con la librería de React. <br /><br /> Puedes seleccionar cualquier pregunta, y serás redireccionado a la solución del problema a través de una pequeña interfaz en donde podrás ingresar los datos de entrada y generar los datos de salida. <br /> En este proyecto se pusieron en práctica varios conceptos importantes como:
                <ul className="bubble-list-container">
                    <li><strong>CSS</strong>
                        <ul className="sub-list-container">
                            <li>Grid Layout</li>
                            <li>Flexbox</li>
                        </ul>
                    </li>
                    <li><strong>Javascript</strong>
                        <ul className="sub-list-container">
                            <li>Manipulación de eventos</li>
                            
                        </ul>
                    </li>
                    <li><strong>React</strong>
                        <ul className="sub-list-container">
                            <li>Manejo del estado de la aplicación</li>
                            <li>Levantamiento del Estado</li>
                            <li>Formularios controlados</li>
                            
                        </ul>
                    </li>
                </ul>
                </p>
            </div>
        </div>
    )
}

export default BubbleContainer