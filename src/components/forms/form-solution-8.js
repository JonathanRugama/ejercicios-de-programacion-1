import React from 'react';

class FormSolutionEight extends React.Component {
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
            <span>Ingrese la nota del primer parcial</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Primer nota"
            name="primerParcial"
            value={this.props.formValues.primerParcial}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la nota del segundo parcial</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Segunda nota"
            name="segundoParcial"
            value={this.props.formValues.segundoParcial}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la nota del primer parcial</span>
            <input 
            onChange={this.props.onChange}
            type="text" 
            placeholder="Tercera nota"
            name="tercerParcial"
            value={this.props.formValues.tercerParcial}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionEight