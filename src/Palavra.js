export default function Palavra({onclick, arr, corClass, palavra, index, letra}){

    return(
        <>
            <button onClick={() => onclick(letra, index)} className={arr.includes(index) || corClass === 'word' ? 'word' : "habilitada"}> {palavra} </button>
        </>
    )
}