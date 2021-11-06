import React from "react";



function Checkbox (props) {
console.log(props)
    return (

        <div>
            <div className = "Checkbox">
            <input type = "checkbox"/>
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
        </div>
        
        )
}
export default Checkbox;
