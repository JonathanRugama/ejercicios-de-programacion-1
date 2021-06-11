import React from 'react'

const ResultsThree = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Tiempo en minutos</td>
                        <td>{props.tiempoMinutos}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Tiempo en segundos</td>
                        <td>{props.tiempoSegundos}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Distancia recorrida</td>
                        <td>{props.distancia}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Velocidad</td>
                        <td>{`${props.resultado} m/s`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsThree