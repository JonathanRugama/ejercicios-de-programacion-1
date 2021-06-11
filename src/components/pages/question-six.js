import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionSix from '../solutions/solution-container-6'
const QuestionSix = () => {
    return (
        <React.Fragment>
        <ImgContainer number={5}/>
        <Question fontsize="b-font" sentence="Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables."/>
        <SolutionSix/>
        </React.Fragment>
   )
}

export default QuestionSix