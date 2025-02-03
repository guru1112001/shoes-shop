import Nav from "./Navigation/Nav";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import "./index.css"
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from './db/data'
import Card from "./components/Card";

function App() {

  const [selectedCategory,setselectedCategory]=useState(null)
  
  //------------input---------------
  const [query,setQuery]=useState("")
  
  const handleInputChange=(event)=>{
    setQuery(event.target.value)
  }
  const filteredItems=products.filter(product=>product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  //-------radio filter---------                                                  
  const handleChange=(event)=>{
    setselectedCategory(event.target.value);
  };

  const handleClick=(event)=>{
    setselectedCategory(event.target.value)
  }
  function filteredData(products,selected,query){
    let filterdProducts=products
    if(query){
      filterdProducts=filteredItems
    }
    if(selected){
      filterdProducts=filterdProducts.filter(({category,color,company,newPrice,title})=>
      category===selected||
      color===selected||
      company===selected||
      newPrice===selected||
      title===selected
      );
    }
    return filterdProducts.map(
      ({img,title,star,reviews,prevPrice,newPrice})=>(
     <Card 
     
     key={Math.random()}

     img={img}
     title={title}
     star={star}
     reviews={reviews}
     prevPrice={prevPrice}
     newPrice={newPrice}
     />
    ));
  }

  const result=filteredData(products,selectedCategory,query)

  return(
    <>
  <Sidebar handleChange={handleChange}/>
   <Nav query={query} handleInputChange={handleInputChange}/>
  <Recommended handleClick={handleClick}/>
  <Products result={result }/>
     </>
  );
  
}

export default App;
