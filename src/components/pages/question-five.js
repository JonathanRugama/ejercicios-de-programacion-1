import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionFive from '../solutions/solution-container-5';
const QuestionFive = () => {
    return (
        <React.Fragment>
        <ImgContainer number={4}/>
        <Question fontsize="b-font" sentence="Escriba un algoritmo que encuentre el salario semanal de un trabajador, dada la tarifa horaria y el número de horas trabajadas diariamente."/>
        <SolutionFive/>
        </React.Fragment>
    )
}

export default QuestionFive