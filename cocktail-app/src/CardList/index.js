import Card from "../Card";
import "./cardList.css"

function CardList(props) {
    return (
    <div className="card-list">
        {props.cocktailList.map(function (cocktail) {
            
            {/* function removeByIndex() {
                props.deleteCocktail(cocktail.id)
            } */}
            
            return <Card key={cocktail.id} cocktail={cocktail} handleDelete={() => props.deleteCocktail(cocktail.id)} />
        })}
    </div>
)
}

export default CardList;
