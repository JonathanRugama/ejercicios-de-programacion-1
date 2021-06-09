import React from 'react';
import FormSolution from './form-solution'
import Results from './results';

class Solution extends React.Component {
    state = {
        form: {
        horasTrabajadas:'',
        tarifaHoraria: '',
        tasaImpuestos: ''
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
        var result = 0;
        var salario = this.state.form.horasTrabajadas * this.state.form.tarifaHoraria
        var tasaImpuestosxRestar = this.state.form.tasaImpuestos * salario
        result = salario - tasaImpuestosxRestar;
        this.setState({resultado: result})
        console.log(`Form was submitted y el resultado es ${result}`)

       
    }
   /*  calculateNetPay = () => {
       

        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolution 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <Results
                horasTrabajadas={this.state.form.horasTrabajadas}
                tarifaHoraria = {this.state.form.tarifaHoraria}
                tasaImpuestos = {this.state.form.tasaImpuestos}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default Solution