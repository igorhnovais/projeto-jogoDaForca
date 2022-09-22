export default function Palavra(props){

    return(
        <>
            <button onClick={props.onclick} className={props.corClass}> {props.palavra} </button>
        </>
    )
}