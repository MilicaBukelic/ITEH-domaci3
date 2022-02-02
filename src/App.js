import './App.css';
import NavBar from "./Komponente/NavBar";
import Proizvodi from './Komponente/Proizvodi';
import Korpa from "./Komponente/Korpa"
import React,{useState} from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  //let cartNum = 0;
  const [cartNum, setCartNum] = useState(0);
  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];

  function dodajProizvod(title){
    console.log("Dodat je proizvod "+title);
    setCartNum(cartNum+1);
    //console.log("Proizvodi u korpi: " +cartNum);
  }
  return (
  <div className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route path="/" element={ <Proizvodi products={products} onAdd={dodajProizvod}/>} />
        <Route path="/korpa" element={<Korpa/>}/>
      </Routes>
  </div>
  );
}

export default App;
