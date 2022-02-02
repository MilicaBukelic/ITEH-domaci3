import React from 'react';
import JedanProizvod from './JedanProizvod.jsx';

const Proizvodi = ({products,onAdd}) => {
  const naziv = "Naziv proizvoda";
  const opis = "Ovo je opis proizvoda";
  const prod = {
      title:"Naziv proizvoda",
      description:"Ovo je opis proizvoda"
  }
  
  

  return <div className='svi_proizvodi'>
      {products.map((proiz)=>{
          return <JedanProizvod proizvod = {proiz} key={proiz.id} onAdd={onAdd}/>
      })}

     {/* <JedanProizvod proizvod={products[0]}/>
        <JedanProizvod proizvod={products[1]}/>
        <JedanProizvod proizvod={products[2]}/> */}
  </div>;
};

export default Proizvodi;
