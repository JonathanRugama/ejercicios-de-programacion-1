import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import Solution from '../solution-container'

const QuestionOne = () => {
    return (
        <React.Fragment>
        <ImgContainer number={0}/>
        <Question fontsize="b-font" sentence="Calcule la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos."/>
        <Solution/>
        </React.Fragment>
    )
}

export default QuestionOne