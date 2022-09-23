import React, { useState } from "react";

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
let quantidadeErro = 0;

export default function App() {

    let escolhida = '';

    const [palavraSorteada, setPalavraSorteada] = useState([]);

    const [corPalavra, setCorPalavra] = useState('word');
    const [clicada, setClicada] = useState([]);
    const [vogal, setVogal] = useState([]);
    console.log(vogal);
    const [foto, setFoto] = useState(forca0);





    function palavraAleatoria() {
        let sorteada = Math.floor(Math.random() * palavras.length);
        escolhida = palavras[sorteada].split('');

        setPalavraSorteada(escolhida);
        console.log(escolhida)
        setClicada([]);

        mostrarPalavraHabilitada()
        //letraClicada()
    }


    function mostrarPalavraHabilitada() {
        setCorPalavra('habilitada');
    }

    function apertarTecla(letra, index) {

        if (!clicada.includes(index)) {
            const arr = [...clicada, index]
            setClicada(arr)
        }

        letraClicada(letra, index)
    }

    function letraClicada(letra, index) {
        const palavraSemAcento = palavraSorteada.join('').normalize("NFD").replace(/[^a-zA-Z\s]/g, "")

        if (palavraSemAcento.includes(letra)) {

            setVogal([...vogal, letra])

        } else {

            switch (quantidadeErro += 1) {
                case 1: return setFoto(forca1);
                case 2: return setFoto(forca2);
                case 3: return setFoto(forca3);
                case 4: return setFoto(forca4);
                case 5: return setFoto(forca5);
                case 6:  setFoto(forca6); 
                     break;
                default: break;
            }

        }
    }

    return (
        <>
            <section className="header">
                <div>
                    <img src={foto} alt={foto}/>
                </div>
                <div className="aside">
                    <button onClick={palavraAleatoria} className="choose-word"> Escolher palavra </button>
                    <div className="underline">
                        <div> {palavraSorteada.map((item, i) => <h1 key={i}> {(vogal.includes(item.normalize("NFD").replace(/[^a-zA-Z\s]/g, ""))) ? `${item}` : "_"} </h1> )} </div>
                    </div>
                </div>
            </section>

            <div className="keyboard">
                {alfabeto.map((item, i) => <Palavra onclick={apertarTecla} letra={item} index={i} palavra={alfabeto[i]} arr={clicada} corClass={corPalavra} key={i} />)}
            </div>

            <div className="footer">
                <h4> Já sei a palavra!</h4>
                <input className="input"></input>
                <button className="kick"> Chutar </button>
            </div>
        </>
    )
}