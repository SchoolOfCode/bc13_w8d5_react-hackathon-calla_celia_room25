import "./favecard.css"

function FaveCard(props) {
    console.log(props)
    return (
        <div className="card">
            <h2> {props.cocktail.strDrink}</h2>
            <img alt="" src={props.cocktail.strDrinkThumb}></img>
            <p> <b>Ingredients:</b> {props.cocktail.ingredients}.</p>
            <p id="instructions">{props.cocktail.strInstructions}</p>
        </div>
    )
}

export default FaveCard