import './App.css';
import React from "react";
//import Info from "./Components/Info";
//import Footer from "./Components/Footer"
//import Header from "./Components/Header"
//import MainContent from './Components/MainContent';
import Checkbox from './Components/Checkbox';
//import TodoItem from './TodoItem';
import ReactDOM from "react-dom";

function App() {



 

  return (
    <div className = "contacts">
      
      <Checkbox 
      contact = {{name:"Md Touhidul Islam" ,
      imgUrl: "http://placekitten.com/300/200" ,
      phone:"38448372789393",
       email: "mdtouhidul.islam@tuni.fi"}} />

<Checkbox contact = {{name:"Md Touhidul Islam" ,
imgUrl: "http://placekitten.com/300/200" ,
phone:"38448372789393",
 email: "mdtouhidul.islam@tuni.fi"}}/>

<Checkbox contact = {{name:"Md Touhidul Islam" ,
imgUrl: "http://placekitten.com/300/200" ,
phone:"38448372789393",
 email: "mdtouhidul.islam@tuni.fi"}}/>

<Checkbox contact = {{name:"Md Touhidul Islam" ,
imgUrl: "http://placekitten.com/300/200" ,
phone:"38448372789393",
 email: "mdtouhidul.islam@tuni.fi"}}/>
    </div>
     
    
  );
}

export default App;
