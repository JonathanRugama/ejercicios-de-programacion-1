import React from 'react';
import ProgressBarItem from './progress-bar-item'
const ProgressBar = () => {
    return(
        <div className="question-progress-bar">
           <ProgressBarItem number={1}/>
           <ProgressBarItem number={2}/>
           <ProgressBarItem number={3}/>
           <ProgressBarItem number={4}/>
           <ProgressBarItem number={5}/>
           <ProgressBarItem number={6}/>
           <ProgressBarItem number={7}/>
           <ProgressBarItem number={8}/>
           <ProgressBarItem number={9}/>
           <ProgressBarItem number={10}/>
        </div>
    )
}
export default ProgressBar;