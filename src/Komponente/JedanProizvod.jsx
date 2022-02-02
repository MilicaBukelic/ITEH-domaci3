import React from 'react';
import {BsPlusLg,BsDashLg} from "react-icons/bs";

function JedanProizvod({proizvod,onAdd}) {
  //console.log(props);

   // function onAdd(title){
   //     console.log("Dodat proizvod " + title);
    //}

  return <div className='kartica' style={{margin: 1+"em", borderStyle:"dotted"}}>
      <img  className='slika_proizvoda' src="https:/picsum.photos/200" alt="Neka slika"/>
      <div className="podaci">
          <h3 className="card-title">{proizvod.title}</h3>
          <p className="card-text">{proizvod.description}</p>
      </div>
      <button className='dugmici' onClick={() => onAdd(proizvod.title)}> <BsPlusLg/> </button>
      <button className='dugmici'> <BsDashLg/> </button>
  </div>;
}

export default JedanProizvod;

