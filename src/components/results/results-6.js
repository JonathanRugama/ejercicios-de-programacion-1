import React from 'react'

const ResultsSix = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <table className="table-results">
            <caption className="table-title">Intercambio de variables</caption>
                <tbody className="table-body">
                    <tr className="table-row">
                        <td>Variable A</td>
                        <td>{props.variableA}</td>
                    </tr>
                    <tr className="table-row">
                        <td>Variable B</td>
                        <td>{props.variableB}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsSix