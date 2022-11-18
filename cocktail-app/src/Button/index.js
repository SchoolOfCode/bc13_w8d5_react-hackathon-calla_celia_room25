import "./button.css"
function Button(props) {
    return ( 
    <div>
    <button className="Button" onClick={props.handleDelete}> Delete me after trying </button>
    </div>
    )
}

export default Button