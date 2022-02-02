import './App.css';
import NavBar from "./Komponente/NavBar";
import Proizvodi from './Komponente/Proizvodi';
import Korpa from "./Komponente/Korpa"
import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  //let cartNum = 0;
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [ukupnaCena,setTotalPrice] = useState(0);
  const [products] = useState([
    {
      id: 1,
      image:"https://images.unsplash.com/photo-1579440676594-3fef6d6ef538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      price: 100,
      amount: 0,
    },
    {
      id: 2, 
      image:"https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      price: 70,
      amount: 0,
    },
    {
      id: 3,
      image:"https://media.istockphoto.com/photos/ice-cream-scoops-in-bowl-picture-id500548196?k=20&m=500548196&s=612x612&w=0&h=mm1XTJAjQF10mt5A9dEuC8b_KoRp7yWE8OhZcuOdviM=",
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      price: 130,
      amount: 0,
    },
  ]);

  function refreshCart(){
    let noviProizvodi = products.filter((prod) => prod.amount > 0);
    setCartProducts(noviProizvodi);
  }

  function dodajProizvod(title,id){
    console.log("Dodat je proizvod "+title);
    setCartNum(cartNum+1);
    //console.log("Proizvodi u korpi: " +cartNum);
    products.forEach((prod) => {
      if(prod.id === id){
        prod.amount++;
        setTotalPrice(ukupnaCena+prod.price);
      }
      console.log(prod.amount);
    });
  refreshCart();
  }
  return (
  <div className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route path="/" element={ <Proizvodi products={products} onAdd={dodajProizvod}/>} />
        <Route path="/korpa" element={<Korpa products={cartProducts} price={ukupnaCena}/>}/>
      </Routes>
  </div>
  );
}

export default App;
