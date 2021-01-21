import React, {useState} from 'react'
import Sub from './Sub';

export default  (props) => {

    const [num, setNum] = useState(0)

    function quandoClicar(ValorGerado, texto) {

        setNum(ValorGerado)
    }

    return (
        <div>
            <h4>Valor:{num}</h4>
            
            <Sub quandoclicar={quandoClicar}>Pedro</Sub>

        </div>

    );
};
