import React from 'react';
import FormSolutionTen from '../forms/form-solution-10'
import ResultsTen from '../results/results-10';

class SolutionTen extends React.Component {
    state = {
        form: {
        cantidadDiscoDuro:''
       
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
        var cantidadDeInformacion = 0;
        var cdNecesarios = 0;
        cantidadDeInformacion = this.state.form.cantidadDiscoDuro * 1024
        cdNecesarios = cantidadDeInformacion/700
        
        this.setState({resultado: cdNecesarios})
        console.log(`Form was submitted y el resultado es ${cdNecesarios}`)
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionTen 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsTen
                cantidadDiscoDuro={this.state.form.cantidadDiscoDuro}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionTen