import React from 'react'

const ResultsSeven = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Velocidad constante</td>
                        <td>{props.velocidad}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Tiempo (s)</td>
                        <td>{props.tiempo}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Distancia (metros)</td>
                        <td>{props.distancia}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsSeven