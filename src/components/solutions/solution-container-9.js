import React from 'react';
import FormSolutionNine from '../forms/form-solution-9'
import ResultsNine from '../results/results-9';

class SolutionNine extends React.Component {
    state = {
        form: {
        respuestasCorrectas:'',
        respuestasIncorrectas: '',
        respuestasEnBlanco: ''
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
       let result = (this.state.form.respuestasCorrectas*4) + (this.state.form.respuestasIncorrectas*-1) + (this.state.form.respuestasEnBlanco * 0);
        this.setState({resultado: result})
        console.log(`Form was submitted y el resultado es ${result}`)
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionNine 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsNine
                respuestasCorrectas={this.state.form.respuestasCorrectas}
                respuestasIncorrectas = {this.state.form.respuestasIncorrectas}
                respuestasEnBlanco = {this.state.form.respuestasEnBlanco}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionNine