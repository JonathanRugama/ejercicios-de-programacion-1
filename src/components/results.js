import React from 'react'

const Results = (props) => {
    return(
        <div className="results-container">
            <h2 className="results-title">Resultado</h2>
            <p>{props.resultado}</p>
        </div>
    )
}

export default Results