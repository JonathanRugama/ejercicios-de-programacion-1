import React from 'react';
import FormSolutionSix from '../forms/form-solution-6'
import ResultsSix from '../results/results-6';

class SolutionSix extends React.Component {
    state = {
        form: {
        variableA:'',
        variableB: ''
    }
    

}
    
    handleChange = (e) => {
        /* const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value */
        this.setState({
           /*  form:nextForm, */
           form: {
               /* Dejamos caer todos los valores anteriores */
               ...this.state.form,
               /* Y añadimos el adicional o sobreescribimos */
               [e.target.name]: e.target.value,
           }
            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
       this.intercambio()
       
    }
    intercambio = () => {
        var varA = this.state.form.variableA;
        var varB = this.state.form.variableB;
        this.setState({
                    form: {
                        variableA: varB,
                        variableB: varA
                    }
                    })
    }
    render() {
        return (
            <section className="solution-container">
                <FormSolutionSix 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsSix
                variableA={this.state.form.variableA}
                variableB = {this.state.form.variableB}
                
                />
    
            </section>
        )
    }
}

export default SolutionSix