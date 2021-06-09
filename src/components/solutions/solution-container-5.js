import React from 'react';
import FormSolutionFive from '../forms/form-solution-5'
import ResultsFive from '../results/results-5';

class SolutionFive extends React.Component {
    state = {
        form: {
        horasTrabajadasDiarias:'',
        tarifaHoraria: '',
    },
        resultado : ''

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
        var salarioSemanal = 0;
         salarioSemanal = (this.state.form.horasTrabajadasDiarias * this.state.form.tarifaHoraria) * 7
        
        this.setState({resultado: salarioSemanal})
        console.log(`Form was submitted y el resultado es ${salarioSemanal}`)
    }
  
    render() {
        return (
            <section className="solution-container">
                <FormSolutionFive 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsFive
                horasTrabajadasDiarias={this.state.form.horasTrabajadasDiarias}
                tarifaHoraria = {this.state.form.tarifaHoraria}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionFive