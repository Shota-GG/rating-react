import './rate.css'

export default function Rate(props) {
    return(
        <div className="rating">
            <button id={props.id} onClick={props.click}>{props.number}</button>
        </div>
    )
}

