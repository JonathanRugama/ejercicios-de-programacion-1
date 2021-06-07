import React from 'react';
import {Link} from 'react-router-dom'

const ProgressBarItem = (props) => {
    return(
        <div className="progress-bar__item">
            <div className="progress-bar__circle"><Link style={{textDecoration:'none'}}to={`/question-${props.number.toString()}`}>{props.number}</Link></div>
            <div className="progress-bar__line"></div>
        </div>
    )
}
export default ProgressBarItem;