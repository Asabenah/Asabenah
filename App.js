import './App.css';
import React from "react";
//import Info from "./Components/Info";
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainContent from './Components/MainContent';
import Checkbox from './Components/Checkbox';
import ReactDOM from "react-dom";

function App() {

 const date = new Date()
 const hours = date.getHours()
 let timeOfDay

 if (hours == 12) {
   timeOfDay = "morning"
 }

 else if (hours >= 12 && hours <17){
   timeOfDay = "afternoon"
 }
 else{
   timeOfDay = "night"
 }

  return (
    <div>
      <h1>Good {timeOfDay } </h1>
      <Header/>
      <MainContent/>
     <Footer/>
     <Checkbox/>
    </div>
     
    
  );
}

export default App;
