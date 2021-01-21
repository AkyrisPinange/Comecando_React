import React from 'react'
import Display from './display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'


export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    incre = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }
    decre = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>

                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}>

                </PassoForm>
                <Display valor={this.state.valor}></Display>

                <Botoes ONincre={this.incre} ONdecre={this.decre} ></Botoes>
            </div>

        )

    }

}