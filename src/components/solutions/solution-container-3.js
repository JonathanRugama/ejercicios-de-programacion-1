import React from 'react';
import FormSolutionThree from '../forms/form-solution-3'
import ResultsThree from '../results/results-3';

class SolutionThree extends React.Component {
    state = {
        form: {
        tiempoSegundos:'',
        tiempoMinutos: '',
        distancia: ''
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
        var velocidad = 0;
        var tiempo = 0;
        var minutosASegundos= parseInt(this.state.form.tiempoMinutos)*60;
    
        tiempo = (parseInt(this.state.form.tiempoSegundos) + minutosASegundos);
        velocidad = parseInt(this.state.form.distancia)/tiempo;
        this.setState({resultado: velocidad})
        console.log(`Form was submitted y el resultado es ${velocidad}`)
    }

    render() {
        return (
            <section className="solution-container">
                <FormSolutionThree 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
                <ResultsThree
                tiempoMinutos={this.state.form.tiempoMinutos}
                tiempoSegundos = {this.state.form.tiempoSegundos}
                distancia = {this.state.form.distancia}
                resultado = {this.state.resultado}
                />
    
            </section>
        )
    }
}

export default SolutionThree