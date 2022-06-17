import "./CircleSelector.css"
export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button onClick={props.handleClick} className={props.one ? "selected" : ""} name="one">{props.one ? "Circle 1 hier" : "Select Circle 1"}</button>
      <button onClick={props.handleClick} className={props.two ? "selected" : ""} name="two">{props.two ? "Circle 2 hier" : "Select Circle 2"}</button>
      <button onClick={props.handleClick} className={props.three ? "selected" : ""} name="three">{props.three ? "Circle 3 hier" : "Select Circle 3"}</button>
      <button onClick={props.handleClick} className={props.four ? "selected" : ""} name="four">{props.four ? "Circle 4 hier" : "Select Circle 4"}</button>
    </div>
  );
}
