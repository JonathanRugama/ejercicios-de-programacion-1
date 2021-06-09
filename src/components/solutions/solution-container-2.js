import React from 'react';
import FormSolutionTwo from '../forms/form-solution-2'
import ResultsTwo from '../results/results-2';

class SolutionTwo extends React.Component {
    state = {
        form: {
        numeroA:'',
        numeroB: '',
    },
        results: {
        sumaResultado : '',
        restaResultado : '',
        multiplicacionResultado: '',
        divisionResultado: ''
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
        this.setState({
            results: {
                sumaResultado: this.Sumar(),
                restaResultado: this.Restar(),
                multiplicacionResultado: this.Multiplicar(),
                divisionResultado: this.Dividir()
            }
        })
        console.log(`Form was submitted y el resultado es `)
    }

    Sumar = () => {
        let resultadoSuma = 0
        resultadoSuma = parseInt(this.state.form.numeroA) + parseInt(this.state.form.numeroB)

        return resultadoSuma
    }

    Restar = () => {
        let resultadoResta = 0
        resultadoResta = this.state.form.numeroA - this.state.form.numeroB

        return resultadoResta
    }
    Multiplicar = () => {
        let resultadoMultiplicacion = 0
        resultadoMultiplicacion = this.state.form.numeroA * this.state.form.numeroB

        return resultadoMultiplicacion
    }

    Dividir = () => {
        let resultadoDivision = 0
        resultadoDivision = this.state.form.numeroA / this.state.form.numeroB

        return resultadoDivision
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionTwo 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsTwo
                numeroA={this.state.form.numeroA}
                numeroB = {this.state.form.numeroB}
                resultados = {this.state.results}
                />
    
            </section>
        )
    }
}

export default SolutionTwo