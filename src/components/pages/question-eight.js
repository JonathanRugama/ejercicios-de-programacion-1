import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
const QuestionEight = () => {
    return (
        <React.Fragment>
        <ImgContainer number={7}/>
        <Question fontsize="b-font" sentence="Se necesita obtener el promedio simple de un estudiante a partir de sus tres notas parciales"/>
        </React.Fragment>
    )
}

export default QuestionEight