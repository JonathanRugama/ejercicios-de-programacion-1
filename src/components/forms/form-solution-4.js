import React from 'react';

class FormSolutionFour extends React.Component {
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
            <span>Ingrese la base del triangulo</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Base del triangulo"
            name="base"
            value={this.props.formValues.base}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la altura del triangulo</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Altura del triangulo"
            name="altura"
            value={this.props.formValues.altura}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionFour