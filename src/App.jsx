import "./App.css";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from './components/basicos/Aleatorio';
import ListaAlunos from "./components/repeticao/ListaAlunos";

export default function App(props){
    return(
<div className="App">
       <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="Repeticao" color="#FF4C65">
            <ListaAlunos />
        </Card>


        <Card titulo="Componente com Filhos" color="#0000FF">
            <Familia sobrenome="Ferreira">
               <FamiliaMembro nome="Pedro" />
               <FamiliaMembro nome="Ana" />
               <FamiliaMembro nome="Gustavo" /> 
            </Familia>
        </Card>    

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