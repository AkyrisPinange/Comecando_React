import React from 'react'

export default props => {

    return (
        <div>
            <button onClick={() =>{
                props.quandoclicar(Math.random())            
            }}>Alterar</button>
        </div>
    )

}
