import React, { useState } from 'react'

export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNume).fill(0))
    
        function  gerarNumerosNaoContido (Array) {
            const min = 1
            const max = 60
            const Novonum = parseInt(Math.random() * (max - min)) + min
            return Array.includes(Novonum) 
            ? gerarNumerosNaoContido():Novonum
        }

        function gerarNumeros() {
            const novoArray = Array(props.qtdeNume)
            .fill(0)
            .reduce(a =>[...a, gerarNumerosNaoContido(a)],[] )
            .sort((a,b) => a - b)
            setNumeros(novoArray)
        }

    return (

        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );

};