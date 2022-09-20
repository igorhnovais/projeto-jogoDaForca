import palavras from "./Palavras";
import Palavra from "./Palavra";



export default function App() {
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return (
        <>
            <section className="header">
                <div>
                    <img src="./assets/forca0.png" />
                </div>
                <div>
                    <button className="choose-word"> Escolher palavra </button>
                </div>
            </section>

            <div className="keyboard">
                {alfabeto.map((item,i) => <Palavra palavra={alfabeto[i]} />)}
            </div>

            <div className="footer">
                <h4> Já sei a palavra!</h4>
                <input className="input"></input>
                <button className="kick"> Chutar </button>
            </div>
        </>
    )
}