import React from 'react';
import FormSolutionEight from '../forms/form-solution-8'
import ResultsEight from '../results/results-8';

class SolutionEight extends React.Component {
    state = {
        form: {
        primerParcial:'',
        segundoParcial: '',
        tercerParcial: ''
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
        var promedio = 0;
        promedio = (parseInt(this.state.form.primerParcial) + parseInt(this.state.form.segundoParcial) + parseInt(this.state.form.tercerParcial))/3
        
        this.setState({resultado: promedio})
        console.log(`Form was submitted y el resultado es ${promedio}}`)
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionEight 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsEight
                primerParcial={this.state.form.primerParcial}
                segundoParcial = {this.state.form.segundoParcial}
                tercerParcial = {this.state.form.tercerParcial}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionEight