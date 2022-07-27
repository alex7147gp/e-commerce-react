import 	React from 'react';
import styled from 'styled-components'
import  Navbar from '../components/Navbar'
import  Announcement from '../components/Announcement.jsx'  
import  Silder from '../components/Silder.jsx'  
import  Categories from '../components/categories.jsx'  
import  Products from '../components/products.jsx'  
import  Newslatter from '../components/Newslatter.jsx'  
import  Footer from '../components/Footer.jsx'
import  Ofert from '../components/ofert.jsx';
import  Shoes from '../components/shoes.jsx';
import  Static from '../components/statis.jsx';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';  



const Div = styled.div`
`;

const Home = () =>{

   const [menuOpen, setMenuOpen] = useState(false);
   const [category, setCategory] = useState('');



   return (
     <div>	
      <Announcement menuOpen={menuOpen} setMenuOpen={setMenuOpen} category={category} setCategory={setCategory}/>
      <Div style={{position :`${menuOpen === true ? 'fixed' : ''}`}}>   
         <Static menuOpen={menuOpen} setMenuOpen={setMenuOpen} category={category} setCategory={setCategory}/>
         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} category={category} setCategory={setCategory}/>
         <Shoes menuOpen={menuOpen} setMenuOpen={setMenuOpen} category={category} setCategory={setCategory}/>
         <Ofert/>
         <Silder menuOpen={menuOpen} setMenuOpen={setMenuOpen} category={category} setCategory={setCategory}/>
         <Categories/>
         <Products/>
         <Newslatter/>
         <Footer/>
   	</Div>
     </div>)
}


export default Home