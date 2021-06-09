import React from 'react'

const ResultsFour = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Cálculo de datos ingresados</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Base</td>
                        <td>{props.base}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Altura</td>
                        <td>{props.altura}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Superficie del triangulo</td>
                        <td>{props.resultado}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsFour