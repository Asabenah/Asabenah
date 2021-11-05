import './App.css';
import React from "react";
//import Info from "./Components/Info";
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainContent from './Components/MainContent';
import Checkbox from './Components/Checkbox';
import ReactDOM from "react-dom";

function App() {

 const date = new Date(2021, 11, 6, 10)
 const hours = date.getHours()
 let timeOfDay

 const styles = {
  fontSize: 30
}

 if (hours < 12) {
   timeOfDay = "morning"
   styles.color = "Red"
 }

 else if (hours >= 12 && hours <17){
   timeOfDay = "afternoon"
   styles.color = "Green"
 }
 else{
   timeOfDay = "night"
   styles.color = "Black"
 }

 

  return (
    <div>
      <h1 style= {styles }>Good {timeOfDay } </h1>
      <Header/>
      <MainContent/>
     <Footer/>
     <Checkbox/>
    </div>
     
    
  );
}

export default App;
