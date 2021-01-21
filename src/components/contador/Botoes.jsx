import React from 'react'

export default (props) => {
    return (

        <div>
            <button onClick={props.ONincre}>+</button>
            <button onClick={props.ONdecre}>-</button>
        </div>
    );
};