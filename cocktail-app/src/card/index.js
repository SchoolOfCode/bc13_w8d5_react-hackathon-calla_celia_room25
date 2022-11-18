import "./card.css"
import Button from "../Button"

function Card(props) {
// console.log(props)
    return ( 
    <div className="card">
        <h2> {props.cocktail.strDrink}</h2>
        <img alt = "" src = {props.cocktail.strDrinkThumb}></img>
        <p>{props.cocktail.strInstructions}</p>
        <Button handleDelete={props.handleDelete}/>
    </div>
    )
}

export default Card
