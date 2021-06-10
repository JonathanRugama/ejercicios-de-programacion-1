import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionEight from '../solutions/solution-container-8';
const QuestionEight = () => {
    return (
        <React.Fragment>
        <ImgContainer number={7}/>
        <Question fontsize="b-font" sentence="Se necesita obtener el promedio simple de un estudiante a partir de sus tres notas parciales"/>
        <SolutionEight/>
        </React.Fragment>
    )
}

export default QuestionEight