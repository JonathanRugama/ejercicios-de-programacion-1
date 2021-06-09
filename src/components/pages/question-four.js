import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionFour from '../solutions/solution-container-4';
const QuestionFour = () => {
    return (
        <React.Fragment>
        <ImgContainer number={3}/>
        <Question fontsize="b-font" sentence="Escriba un algoritmo que calcule la superficie de un triángulo en función de la base y la altura (S=(1/2) x base x altura)."/>
        <SolutionFour/>
        
        </React.Fragment>
    )
}

export default QuestionFour