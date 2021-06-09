import React from 'react';
import FormSolutionFour from '../forms/form-solution-4'
import ResultsFour from '../results/results-4';

class SolutionFour extends React.Component {
    state = {
        form: {
        base:'',
        altura: '',
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
        var area = 0;
         area = (this.state.form.base * this.state.form.altura)/2
       
        this.setState({resultado: area})
        console.log(`Form was submitted y el resultado es ${area}`)
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionFour 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsFour
                base={this.state.form.base}
                altura = {this.state.form.altura}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionFour