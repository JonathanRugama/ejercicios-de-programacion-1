import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionTen from '../solutions/solution-container-10'

const QuestionTen = () => {
    return (
        <React.Fragment>
        <ImgContainer number={9}/>
        <Question fontsize="s-font" sentence="Elabore un algoritmo que permita calcular el número de CDs necesarios para hacer una copia de seguridad, de la información almacenada en un disco cuya capacidad se conoce. Considerar que el disco duro esta lleno de información, además expresado en gigabyte. Un CD virgen tiene 700 Magabytes de capacidad y un Gigabyt es igual a 1024 megabyte."/>
        <SolutionTen/>
        </React.Fragment>
        )
}

export default QuestionTen