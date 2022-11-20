import "./card.css"
import Button from "../Button"

function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <h2> {props.cocktail.strDrink}</h2>
            <img id="img" alt="" src={props.cocktail.strDrinkThumb}></img>
            <p> <b>Ingredients:</b> {props.cocktail.ingredients}.</p>
            <p id="instructions">{props.cocktail.strInstructions}</p>
            <Button handleDelete={props.handleDelete} handleAdd={props.handleAdd} />
        </div>
    )
}

export default Card

