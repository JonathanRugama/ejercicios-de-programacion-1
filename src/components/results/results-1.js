import React from 'react'

const ResultsOne = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Horas trabajadas</td>
                        <td>{props.horasTrabajadas}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Tarifa horaria</td>
                        <td>{props.tarifaHoraria}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Tasa de impuestos</td>
                        <td>{props.tasaImpuestos}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Pago neto</td>
                        <td>{props.resultado}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsOne