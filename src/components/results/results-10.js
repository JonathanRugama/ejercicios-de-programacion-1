import React from 'react'

const ResultsTen = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Cantidad de Gigas almacenadas</td>
                        <td>{props.cantidadDiscoDuro}</td>
                    </tr>
                    <tr className="table-row">
                        <td>CD's necesarios</td>
                        <td>{props.resultado}</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTen