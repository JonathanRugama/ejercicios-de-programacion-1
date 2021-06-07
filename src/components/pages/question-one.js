import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'

const QuestionOne = () => {
    return (
        <React.Fragment>
        <ImgContainer number={0}/>
        <Question fontsize="b-font" sentence="Calcule la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos."/>
        </React.Fragment>
    )
}

export default QuestionOne