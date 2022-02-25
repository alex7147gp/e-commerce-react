import react from 'react';
import {useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import productsJson from '../utils/products.json';
import manJson from '../utils/products-man.json';
import womanJson from '../utils/products-woman.json';
import kidJson from '../utils/products-kid.json';
import Product from './product';
import {Mobil} from '../responsive'
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const productsP = productsJson;
const man = manJson;
const woman = womanJson;
const kid = kidJson;

const Container = styled.div`
 
 padding:20px;
 display:flex;
 flex-wrap:wrap;
 justify-content: center;
 
  
`;

const Products = ({cat, filters, sort}) =>{
  
  const location = useLocation();
  

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);
  
  useEffect(()=>{
  const getPreduct = async ()=>{
    try{
      const res = await axios.get(
        cat 
         ? `https://data-shop-jcc.herokuapp.com//api/product?category=${cat}`
         : 'https://data-shop-jcc.herokuapp.com//api/product');
      setProducts(res.data);
    }
    catch(err){
      console.log(err)}
  }
    getPreduct();
  },[cat]);
  

  useEffect( async () => {
    cat && 
      setFilterdProducts(
          filters === undefined ? products : filters === {color: 'Color', size: 'Size'} ? products :
          products.filter((item) => 
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value) 
        )
      ) 
    )
  },[products, cat, filters]); 

useEffect(()=>{
  if ((sort === 'newest')) {
    setFilterdProducts((prev)=>
      [...prev].sort((a, b)=> a.createdAt - b.createdAt)
    );
  }
  else if ((sort === 'asc')){
    setFilterdProducts((prev) =>
      [...prev].sort((a, b)=> a.price - b.price)
      )
  }
  else {
    setFilterdProducts((prev) =>
      [...prev].sort((a, b)=> a.price - b.price)
      )
  }
})

  

const list = (cat) => {
     if(location.pathname == '/'){
       return  productsP
     }else if(location.pathname == '/products'){
       return  productsP;  
     }else if(location.pathname == '/products/man'){
       return  man
     }else if(location.pathname == '/products/woman'){
       return  woman;
     }else if(location.pathname == '/products/kid')
       return  kid;
}
	return (
     <Container>
       {cat 
        ? filteredProducts.map(item=><Product item={item} key={item.key}/>)
        : list()
           .slice(0,8)
           .map(item=><Product item={item} key={item.key}/>)}
     </Container>

	)
}

export default Products