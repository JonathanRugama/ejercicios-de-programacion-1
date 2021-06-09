import React from 'react';
import Question from '../question-container';
import ImgContainer from '../img-container'
import SolutionOne from '../solutions/solution-container-1'

const QuestionOne = () => {
    
   /*  const etiquetas = ['Ingrese el número de horas trabajadas',
                        'Ingrese la tarifa horaria',
                        'Tasa de impuestos']
    const placeholder = ['Horas trabajadas',
                        '$ Tarifa horaria',
                        'Tasa de impuestos']
    const cantidadDeVariables= 3

    const form = {
        horasTrabajadas: '',
        tarifaHoraria:'',
        tasaImpuestos:'',
    } */
    return (
        <React.Fragment>
        <ImgContainer number={0}/>
        <Question fontsize="b-font" sentence="Calcule la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos."/>
        <SolutionOne />
        </React.Fragment>
    )
}

export default QuestionOne