import "./App.css";
import { useState, useEffect } from "react";
import CardList from "../CardList/index.js";
import FaveCardList from "../FaveList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cocktail, setCocktail] = useState({});
  const [cocktailList, setCocktailList] = useState([]);
  const [faveCocktailList, setFaveCocktailList] = useState([])

  
  useEffect(() => {
    async function getInitialCocktail() {
      const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
      
      let data = await response.json();
      
      let ingredients = [
        data.drinks[0].strIngredient1,
        data.drinks[0].strIngredient2,
        data.drinks[0].strIngredient3,
        data.drinks[0].strIngredient4,
        data.drinks[0].strIngredient5,
        data.drinks[0].strIngredient6,
        data.drinks[0].strIngredient7,
        data.drinks[0].strIngredient8,
        data.drinks[0].strIngredient9,
        data.drinks[0].strIngredient10,
        data.drinks[0].strIngredient11,
        data.drinks[0].strIngredient12,
        data.drinks[0].strIngredient13,
        data.drinks[0].strIngredient14,
        data.drinks[0].strIngredient15,
      ]
  
      let nonNullIngredients = ingredients.filter(ingredient => {
        return ingredient !== null;
      })

      let ingredientsString = nonNullIngredients.join(", ")

      let randomObjDrink = {
        strDrink: data.drinks[0].strDrink,
        strDrinkThumb: data.drinks[0].strDrinkThumb,
        strInstructions: data.drinks[0].strInstructions,
        id: uuidv4(),
        ingredients: ingredientsString
      };
      setCocktail(randomObjDrink)
    }
    getInitialCocktail();
  },[]);

  
  async function getRandomCocktail() {
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");

    let data = await response.json();
    
    let ingredients = [
      data.drinks[0].strIngredient1,
      data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3,
      data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5,
      data.drinks[0].strIngredient6,
      data.drinks[0].strIngredient7,
      data.drinks[0].strIngredient8,
      data.drinks[0].strIngredient9,
      data.drinks[0].strIngredient10,
      data.drinks[0].strIngredient11,
      data.drinks[0].strIngredient12,
      data.drinks[0].strIngredient13,
      data.drinks[0].strIngredient14,
      data.drinks[0].strIngredient15,
    ]

    let nonNullIngredients = ingredients.filter(ingredient => {
      return ingredient !== null;
    })
    
    let ingredientsString = nonNullIngredients.join(", ")

    let randomObjDrink = {
      strDrink: data.drinks[0].strDrink,
      strDrinkThumb: data.drinks[0].strDrinkThumb,
      strInstructions: data.drinks[0].strInstructions,
      id: uuidv4(),
      ingredients: ingredientsString
    };
    setCocktail(randomObjDrink);
  }


  function addCocktailCard() {
    setCocktailList([...cocktailList, cocktail]);
  }

  function deleteCocktailCard(idToDelete) {
    for (let i = 0; i < cocktailList.length; i++) {
      if (cocktailList[i].id === idToDelete) {
        const delCocktail = [...cocktailList.slice(0, i), ...cocktailList.slice(i + 1),];
        setCocktailList(delCocktail);
      }
    }
    return;
  }

  function handleClick() {
    getRandomCocktail();
    addCocktailCard();
  }

  function clearAll() {
    setCocktailList([]);
  }

  function addFave(idToAdd) {
    for (let i = 0; i < cocktailList.length; i++) {
      if (cocktailList[i].id === idToAdd) {
        const faveCocktail = [...faveCocktailList, cocktailList[i]];
        setFaveCocktailList(faveCocktail);
      }
    }
    return;
  }

  function clearFaves() {
    setFaveCocktailList([])
  }

  return (
    <div className="App">
      <h1 className="h">Discover your favourite cocktail!</h1>
      <button id="button" className="buttons" onClick={handleClick}>Click here for cocktail inspiration</button>
      <button id="clear" className="buttons" onClick={clearAll}>Clear all</button>
      <h2 className="h">My list of cocktails to try</h2>
      <CardList cocktailList={cocktailList} deleteCocktail={deleteCocktailCard} addFave={addFave} />
      <h1 className="h">My list of favourite cocktails</h1>
      <button id="clear" className="buttons" onClick={clearFaves}>Clear all</button>
      <p></p>
      <FaveCardList faveList={faveCocktailList} />
    </div>
  );
}

export default App;
