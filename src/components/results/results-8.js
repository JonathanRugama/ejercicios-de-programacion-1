import React from 'react'

const ResultsEight = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Primer parcial</td>
                        <td>{props.primerParcial}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Segundo parcial</td>
                        <td>{props.segundoParcial}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Tecer parcial</td>
                        <td>{props.tercerParcial}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Promedio</td>
                        <td>{props.resultado}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsEight