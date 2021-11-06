import React from "react";
import ReactDOM from "react-dom"

function Joke(props) {
return (
    <div>
        <h1 > name: {props.name}</h1>
        <h2 >price: {props.price}</h2>
        <h2 >description: {props.description}</h2>
    </div>
)
}


export default Joke;