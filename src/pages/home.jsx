import 	React from 'react';
import  Navbar from '../components/Navbar'
import  Announcement from '../components/Announcement.jsx'  
import  Silder from '../components/Silder.jsx'  
import  Categories from '../components/categories.jsx'  
import  Products from '../components/products.jsx'  
import  Newslatter from '../components/Newslatter.jsx'  
import  Footer from '../components/Footer.jsx'
import  Ofert from '../components/ofert.jsx';  




const Home = () =>{
   return (
   	<div>
         <Announcement/>
         <Navbar/>
         <Ofert/>
         <Silder/>
         <Categories/>
         <Products/>
         <Newslatter/>
         <Footer/>
   	</div>)
}


export default Home