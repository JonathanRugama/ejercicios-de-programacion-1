import React from 'react';

class FormSolutionOne extends React.Component {
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
            <span>Ingrese el número de horas trabajadas</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Horas trabajadas"
            name="horasTrabajadas"
            value={this.props.formValues.horasTrabajadas}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la tarifa horaria</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="$ Tarifa horaria"
            name="tarifaHoraria"
            value={this.props.formValues.tarifaHoraria}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Tasa de impuestos</span>
            <input 
            onChange={this.props.onChange}
            type="text" 
            placeholder="Tasa de impuestos"
            name="tasaImpuestos"
            value={this.props.formValues.tasaImpuestos}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionOne