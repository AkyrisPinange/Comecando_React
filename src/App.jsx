import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicação_direta/Pai'
import Super from './components/comunicação_indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/mega'


//Exibe os dados no index.html na pasta public 
export default (props) => (

    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            
            <Card titulo="#11 - Mega" color="#3CB371">
                <Mega qtdeNume={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#f542b9">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - input" color="#aa42f5">
                <Input></Input>
            </Card>
            <Card titulo="#08 Comunicação Indireta" color="#ED1C24">
                <Super></Super>
            </Card>
            <Card titulo="#07 Comunicação Direta" color="#FA500">
                <Pai sobrenome="Pinangé"></Pai>
            </Card>
            <Card titulo="#06 Condicional v2" color="#FA6900">
                <CondicionalComIf numero={11}>

                </CondicionalComIf>
            </Card>
            <Card titulo="#05 Condicional v1" color="#E94C6F">
                <Condicional numero={10}>

                </Condicional>
            </Card>
            <Card titulo="#04 Repeticao" color="#DB3340">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 Componente com Filhos" color="#59C4C5">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Jao</li>
                        <li>Biu</li>
                        <li>Bia</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo=" #02 Componente com Parametro" color="#5E412F">
                <ComParametro titulo="Esse é o Título"
                    subtitulo="Esse é o subtítulo" />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#BCCF02">
                <Primeiro />
            </Card>

        </div>
    </div>

);