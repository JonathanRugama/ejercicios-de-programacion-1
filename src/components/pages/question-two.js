import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionTwo from '../solutions/solution-container-2'
const QuestionTwo = () => {
    return (
        <React.Fragment>
        <ImgContainer number={1}/>
        <Question fontsize="b-font" sentence="Escriba un algoritmo para: a. Sumar dos números enteros b. Restar dos números enteros c. Multiplicar dos números enteros. d. Dividir un número entero entre otro."/>
        <SolutionTwo />
        </React.Fragment>
    )
}

export default QuestionTwo