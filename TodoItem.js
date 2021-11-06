import React from "react"
import ReactDOM from "react-dom";

function TodoItem (props) {
return (
  
      <div className= "todo-item">
              <input type = "checkbox" checked={props.item.completed} />
              <h1>{props.item.text}</h1>
              
        </div>

  )

}

export default TodoItem;