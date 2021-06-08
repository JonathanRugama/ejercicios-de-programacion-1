import React from 'react';
import '../assets/css/aside.layout.css'
import {Link} from 'react-router-dom'
const Aside = () => {
    return (
        <aside className="aside-container">
            <h2>Lista de preguntas</h2>
            <ol className="questions-list">
                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-1">1. Calcule la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos.</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-2">2. Escriba un algoritmo para: a. Sumar dos números enteros b. Restar dos números enteros c. Multiplicar dos números enteros. d. Dividir un número entero entre otro.</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-3">3. Diseñe un algoritmo para calcular la velocidad en (m/s) del corredor en la carrera de 1500 metros. La entrada consistirá en parejas de números (minutos, segundos) que dan el tiempo del corredor.</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-4">4. Escriba un algoritmo que calcule la superficie de un triángulo en función de la base y la altura (S=(1/2) x base x altura)..</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-5">5. Escriba un algoritmo que encuentre el salario semanal de un trabajador, dada la tarifa horaria y el número de horas trabajadas diariamente.</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-6">6. Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-7">7. Se desea calcular la distancia recorrida en (m) por un automóvil que tiene una velocidad constante (m/s) durante un tiempo (s)</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-8">8. Se necesita obtener el promedio simple de un estudiante a partir de sus tres notas parciales</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-9">9. Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a postulantes, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0</Link></li>

                <li className="item-list"><Link style={{textDecoration:'none'}} to="/question-10">10. Elabore un algoritmo que permita calcular el número de CDs necesarios para hacer una copia de seguridad, de la información almacenada en un disco cuya capacidad se conoce. Considerar que el disco duro esta lleno de información, además expresado en gigabyte. Un CD virgen tiene 700 Magabytes de capacidad y un Gigabyt es igual a 1024 megabyte.</Link></li>
            </ol>
        </aside>
    )
}

export default Aside