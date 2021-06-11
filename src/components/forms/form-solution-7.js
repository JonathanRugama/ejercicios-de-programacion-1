import React from 'react';

class FormSolutionSeven extends React.Component {
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
            <span>Ingrese la velocidad constante en metros x segundo</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Velocidad en m/s"
            name="velocidad"
            value={this.props.formValues.velocidad}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese el tiempo en segundos</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Tiempo en segundos"
            name="tiempo"
            value={this.props.formValues.tiempo}/>
        </label>
    
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionSeven