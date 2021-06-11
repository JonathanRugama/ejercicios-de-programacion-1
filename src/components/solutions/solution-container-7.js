import React from 'react';
import FormSolutionSeven from '../forms/form-solution-7'
import ResultsSeven from '../results/results-7';

class SolutionSeven extends React.Component {
    state = {
        form: {
        velocidad:'',
        tiempo: '',
    },
        distancia: ''

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
       
        var distancia = this.state.form.velocidad * this.state.form.tiempo
        this.setState({distancia: distancia})
        console.log(`Form was submitted y el resultado es ${distancia}`)
    }
   /*  calculateNetPay = () => {


        return result;
    } */
    render() {
        return (
            <section className="solution-container">
                <FormSolutionSeven 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsSeven
                tiempo={this.state.form.tiempo}
                velocidad = {this.state.form.velocidad}
                distancia = {this.state.distancia}
                />
    
            </section>
        )
    }
}

export default SolutionSeven