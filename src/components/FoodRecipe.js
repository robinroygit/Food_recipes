import Recipe from "./Recipe";
import image from "../assets/logoo.png";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const FoodRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading,setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  const APP_ID = "7a5777fa";
  const APP_KEY = "01efb4bec974fc483a841dbbc7e34764";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipe = async () => {
   try{ const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    setSearch("");
    setLoading(false)
  }catch(e){
console.log(e)
  }

  };

  const updateSeach = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <div className="App">

        <Link to="/" >
        <div className="heading">
          <img className="logoo" src={image} alt="" />
          <h1 className="mainheading">search food Recipes</h1>
          </div>
        </Link>
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSeach}
          />
          <button type="submit" className="search-button">
            search
          </button>
        </form>

        <div className="recipes">
        
          {loading?<Loading/>:recipes.map((recipe) => (
            <Recipe
            loading={loading}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              key={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodRecipe;
