import React from 'react';

class FormSolutionThree extends React.Component {
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
            <span>Ingrese los minutos</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Minutos"
            name="tiempoMinutos"
            value={this.props.formValues.tiempoMinutos}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese los segundos</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Segundos"
            name="tiempoSegundos"
            value={this.props.formValues.tiempoSegundos}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingrese la distancia recorrida en metros</span>
            <input 
            onChange={this.props.onChange}
            type="text" 
            placeholder="Distancia en metros"
            name="distancia"
            value={this.props.formValues.distancia}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionThree