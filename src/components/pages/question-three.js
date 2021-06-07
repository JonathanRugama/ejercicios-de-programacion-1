import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
const QuestionThree = () => {
    return (
        <React.Fragment>
        <ImgContainer number={2}/>
        <Question fontsize="b-font" sentence="Diseñe un algoritmo para calcular la velocidad en (m/s) del corredor en la carrera de 1500 metros. La entrada consistirá en parejas de números (minutos, segundos) que dan el tiempo del corredor."/>
        </React.Fragment>
    )
}

export default QuestionThree