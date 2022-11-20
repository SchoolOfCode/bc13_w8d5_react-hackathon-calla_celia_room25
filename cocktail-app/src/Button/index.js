import "./button.css";
function Button(props) {
  return (
    <div>
      <button className="Button" onClick={props.handleDelete}>Remove</button>
      <button className="Button2" onClick={props.handleAdd}>Add to favourite list</button>
    </div>
  );
}

export default Button;
