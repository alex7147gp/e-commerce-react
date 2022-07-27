import 	React from 'react';
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import manJson from '../utils/category-man.json';
import womenJson from '../utils/category-women.json';
import kidsJson from '../utils/category-kids.json';
import brandsJson from '../utils/category-brands.json';
import saleJson from '../utils/category-sale.json';    


const Section = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  background: white;
  display: flex;

`
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 80%;
  flex: 1; 

`; 
const ConImg = styled.div`
  display: flex;
  padding: 20px;
  width: 25%;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const List = styled.ul`
  margin: 0; 
  padding: 0; 
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`


const Item = styled.li`
  width:32%;
  display: flex;
  margin-bottom: 15px;
  font-size: 16px;
  cursor: pointer;
  &:hover{
  transform: scale(1.0);
}  

`

const Punto = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover{
   transform: scale(1.0);
   text-decoration: underline;
`;


const Shoes = ({menuOpen, setMenuOpen, category, setCategory} ) =>{
    
  const [json, setJson] = useState(manJson);


useEffect(()=>{

  const GetCategory = () =>{
    if (category === 'man'){
      setJson(manJson);
    }
    else if( category === 'women'){
      setJson(womenJson);
    }
    else if( category == 'kids'){
      setJson(kidsJson);
    }
    else if( category === 'brands'){
      setJson(brandsJson);
    }
    else if( category === 'sale'){
      setJson(saleJson);
    }
  }
  
  GetCategory();
  
},[category])

  console.log(json)
  console.log(manJson[2]);

  

   return (
         <Section style={{zIndex:`${menuOpen === true ? '100' : '0'}`, position : `${menuOpen === true ? 'fixed' : 'absolute'}`}}>
           <ConImg style={{display:`${category === 'brands' ? 'none' : 'flex'}`}}>
             <Img src={json[0].img}/>
           </ConImg>
              <Wrapper>
                <List>
                {json[1].list.map(list =>
                 <Item><Punto href="/" >{list.item}</Punto></Item>              
                 )}
                </List>
              </Wrapper>
              <CancelIcon style={{fontSize:'30px', margin: '10px', cursor: 'pointer'}} onClick={()=>setMenuOpen(false)}/> 
         </Section>)
}


export default Shoes