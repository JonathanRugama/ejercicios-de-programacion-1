import React from 'react';

class FormSolutionNine extends React.Component {
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
            <span>Ingrese el numero de respuestas correctas</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Ingrese la cantidad en numeros"
            name="respuestasCorrectas"
            value={this.props.formValues.respuestasCorrectas}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la cantidad de respuestas incorrectas</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Ingrese la cantidad en numeros"
            name="respuestasIncorrectas"
            value={this.props.formValues.respuestasIncorrectas}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la cantidad de respuestas en blanco</span>
            <input 
            onChange={this.props.onChange}
            type="text" 
            placeholder="Ingrese la cantidad en numeros"
            name="respuestasEnBlanco"
            value={this.props.formValues.respuestasEnBlanco}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionNine