import React from 'react'

const ResultsOne = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Respuestas Correctas</td>
                        <td>{props.respuestasCorrectas}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Respuestas Incorrectas</td>
                        <td>{props.respuestasIncorrectas}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Respuestas en blanco</td>
                        <td>{props.respuestasEnBlanco}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Resultado</td>
                        <td>{props.resultado}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsOne