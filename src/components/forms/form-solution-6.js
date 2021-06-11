import React from 'react';

class FormSolutionSix extends React.Component {
    state ={};
  /*  handleChange = (e) => {
         console.log({name : e.target.name, value : e.target.value}); 
        this.setState({
            [e.target.name]: e.target.value,
        });
    } */
    handleClick = (e) => {
        console.log("Button was clicked")
    }
  
    render() {
        return(
    <form onSubmit={this.props.onSubmit} className="form-solution" action="">
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese variable A</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Variable A"
            name="variableA"
            value={this.props.formValues.variableA}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese variable B</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Variable B"
            name="variableB"
            value={this.props.formValues.variableB}/>
        </label>
       
        <button onClick={this.handleClick}>Intercambiar</button>
    </form>
    )
    }

}

export default FormSolutionSix