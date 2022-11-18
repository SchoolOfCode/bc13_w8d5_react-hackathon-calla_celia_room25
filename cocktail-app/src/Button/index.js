import "./button.css";
function Button(props) {
  return (
    <div>
      <button className="Button" onClick={props.handleDelete}>
        {" "}
        Remove{" "}
      </button>
    </div>
  );
}

export default Button;
