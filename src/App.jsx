import "./App.css";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio'

export default function App(props){
    return(
<div className="App">
       <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="Desafio Aleatorio" color="#6CF527">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Fragmento" color="#F5276C">
            <Fragmento />
        </Card>
       
       <Card titulo="Segundo Componente" color="#276CF5">
       <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!" ></ComParametro>
       </Card>

       <Card titulo="Primeiro Componente" color="#B027F5">
       <Primeiro></Primeiro>
       </Card>
       </div>
</div>        
    )
}