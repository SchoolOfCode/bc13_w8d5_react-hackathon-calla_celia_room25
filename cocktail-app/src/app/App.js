// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    async function getRandomCocktail() {
      const response = await fetch(
        "https://thecocktaildb.com/api/json/v1/1/random.php"
      );

      let data = await response.json();
      console.log(data);
      setCocktail(data);
    }
    getRandomCocktail();
  }, []);

  return <div className="App"></div>;
}

export default App;
