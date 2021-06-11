import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionSeven from '../solutions/solution-container-7'
const QuestionSeven = () => {
    return (
        <React.Fragment>
        <ImgContainer number={6}/>
        <Question fontsize="b-font" sentence="Se desea calcular la distancia recorrida en (m) por un automóvil que tiene una velocidad constante (m/s) durante un tiempo (s)"/>
        <SolutionSeven/>
        </React.Fragment>
    )
}

export default QuestionSeven