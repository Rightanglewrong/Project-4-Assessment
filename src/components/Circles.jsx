import "./Circles.css"
export default function Circles(props) {
    return (
        <div className="Circles">
            <div className={props.one ? "selected" : ""}>1</div>
            <div className={props.two ? "selected" : ""}>2</div>
            <div className={props.three ? "selected" : ""}>3</div>
            <div className={props.four ? "selected" : ""}>4</div>
        </div>
    )
}