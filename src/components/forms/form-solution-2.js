import React from 'react';

class FormSolutionTwo extends React.Component {
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
            <span>Ingresar el numero A</span>
            <input  
            onChange={this.props.onChange}  
            type="text" 
            placeholder="Numero A"
            name="numeroA"
            value={this.props.formValues.numeroA}/>
        </label>
        <label className="form-solution__item" htmlFor="">
            <span>Ingresar el numero B</span>
            <input
            onChange={this.props.onChange} 
            type="text" 
            placeholder="Numero B"
            name="numeroB"
            value={this.props.formValues.numeroB}/>
        </label>
        <button onClick={this.handleClick}>Calcular</button>
    </form>
    )
    }

}

export default FormSolutionTwo