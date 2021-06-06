import React from 'react';

const ProgressBarItem = (props) => {
    return(
        <div className="progress-bar__item">
            <div className="progress-bar__circle"><a href="">{props.number}</a></div>
            <div className="progress-bar__line"></div>
        </div>
    )
}
export default ProgressBarItem;