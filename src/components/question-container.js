import React from 'react';


const Question =(props) => {
    return(
        <div className="question-container">
            <p className={`question-paragraph ${props.fontsize}`}>{props.sentence}</p>
        </div>
    )
} 
export default Question;