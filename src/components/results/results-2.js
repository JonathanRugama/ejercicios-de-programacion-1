import React from 'react'

const ResultsTwo = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Numero A</td>
                        <td>{props.numeroA}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Numero B</td>
                        <td>{props.numeroB}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Resultado de Resta</td>
                        <td>{props.resultados.restaResultado}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Resultado de Suma</td>
                        <td>{props.resultados.sumaResultado}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Resultado de multiplicación</td>
                        <td>{props.resultados.multiplicacionResultado}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Resultado de división</td>
                        <td>{props.resultados.divisionResultado}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTwo