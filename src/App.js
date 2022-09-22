import React, {useState} from "react";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";


import palavras from "./Palavras";
import Palavra from "./Palavra";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function App() {

    let escolhida = '';

    const[palavraSorteada, setPalavraSorteada] = useState(0);
    const[palavraMostrada, setPalavraMostrada] = useState([]);
    const[corPalavra, setCorPalavra] = useState('word');
    const [clicada, setClicada] = useState('habilitada');



    function palavraAleatoria(){
        let sorteada = Math.floor(Math.random() * palavras.length);
        escolhida = palavras[sorteada].split('');
        
        setPalavraSorteada(escolhida);

        mostrarPalavra()
    }


    function mostrarPalavra(){
        
        let arr = [];

        for(let i = 0; i < escolhida.length; i++){
            arr.push("_ ")
        }
        setPalavraMostrada(arr);

        setCorPalavra('habilitada');
    }

    function apertarTecla(index){
        alert('oi');
        if(corPalavra === 'habilitada'){
            setCorPalavra('word')
        }
        
    }



    return (
        <>
            <section className="header">
                <div>
                    <img src={forca0} />
                </div>
                <div className="aside">
                    <button onClick={palavraAleatoria} className="choose-word"> Escolher palavra </button>
                    <div className="underline">
                        <h1>{palavraMostrada}</h1>
                    </div>
                </div>
            </section>

            <div className="keyboard">
                {alfabeto.map((item,i) => <Palavra onclick={apertarTecla} palavra={alfabeto[i]} corClass={corPalavra} key={i} />)}
            </div>

            <div className="footer">
                <h4> Já sei a palavra!</h4>
                <input className="input"></input>
                <button className="kick"> Chutar </button>
            </div>
        </>
    )
}