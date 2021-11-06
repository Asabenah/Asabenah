import React from "react";
//import Joke from "./Components/Joke"
//import JokesData from "./JokesData";
import Joke from "./Components/Joke"
import ProductsData from "./Components/ProductsData"
import ReactDOM from "react-dom"


function App () {

 const jokecomponents = ProductsData.map(joke=> {
  return (
     <Joke key = {joke.id} name= {joke.name} price = {joke.price} description = {joke.description}/> 
  )
})


  return (


    <div>
{jokecomponents}
    </div>
  )
}

export default App;
