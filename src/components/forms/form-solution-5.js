import React from 'react';

class FormSolutionFive extends React.Component {
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
            <span>Ingrese el número de horas trabajadas por día</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Horas trabajadas por dia"
            name="horasTrabajadasDiarias"
            value={this.props.formValues.horasTrabajadasDiarias}/>
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
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionFive