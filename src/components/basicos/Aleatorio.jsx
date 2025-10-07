import React from "react";

export default (props) =>{
    const max = props.max;
    const min = props.min;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return(
    <div>
        <h2>Valor Aleatorio</h2>
        <p><strong>Valor Minimo: </strong> {props.min}</p>
        <p><strong>Valor Max: </strong> {props.max}</p>
        <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
    </div>
    );};