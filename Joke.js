import React from "react";
import ReactDOM from "react-dom"

function Joke(props) {
return (
    <div>
        <h1 style={{display: props.question && "none"}}> Question: {props.joke.question}</h1>
        <h2 style= {{color: !props.question && "green"}}>Ans: {props.joke.punchLine}</h2>
    </div>
)
}


export default Joke;