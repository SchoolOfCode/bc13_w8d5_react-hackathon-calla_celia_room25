// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import CardList from "../CardList/index.js";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [cocktail, setCocktail] = useState({strDrink: "Vodka Slime", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/apex461643588115.jpg", strInstructions: "Fill glass with ice. Add vodka, 7-up then finish with the lime juice.", id: 1 });
  const [cocktailList, setCocktailList] = useState([])
  console.log(cocktailList)
  
  async function getRandomCocktail() {
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");

    let data = await response.json();
    // console.log(data.drinks)

    let randomObjDrink = {
      strDrink: data.drinks[0].strDrink,
      strDrinkThumb: data.drinks[0].strDrinkThumb,
      strInstructions: data.drinks[0].strInstructions,
      id: uuidv4()
    }
    setCocktail(randomObjDrink);
  }

  function addCocktailCard() {
    setCocktailList([...cocktailList, cocktail])
  }

  function deleteCocktailCard(idToDelete) {
    for (let i = 0; i < cocktailList.length; i++) {
      if (cocktailList[i].id === idToDelete) { 
        const delCocktail = [...cocktailList.slice(0, i), ...cocktailList.slice(i + 1)]
        setCocktailList(delCocktail)
      }
    } return  
  }

  function handleClick() {
    getRandomCocktail()
    addCocktailCard()
  }

  return <div className="App">
    <h1>Discover your favourite cocktail here!</h1>
    <button id="button" onClick={handleClick}>Add a random cocktail to your list</button>
    <h2>My list of cocktails to try</h2>
    <CardList cocktailList={cocktailList} deleteCocktail={deleteCocktailCard} />
  </div>;
}

export default App;
