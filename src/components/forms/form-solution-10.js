import React from 'react';

class FormSolutionTen extends React.Component {
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
            <span>Ingrese la cantidad de Gigas almacenadas</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Gigas"
            name="cantidadDiscoDuro"
            value={this.props.formValues.cantidadDiscoDuro}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionTen