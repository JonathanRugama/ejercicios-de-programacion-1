import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionNine from '../solutions/solution-container-9';
const QuestionNine = () => {
    return (
        <React.Fragment>
        <ImgContainer number={8}/>
        <Question fontsize="m-font" sentence="Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a postulantes, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0"/>
        <SolutionNine/>
        </React.Fragment>
    )
}

export default QuestionNine