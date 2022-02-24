import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {Mobil} from '../responsive'
import ListIcon from '@mui/icons-material/List';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import addProduct from '../redux/cartRedux'

const MenuItem = styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left: 18px;
  transition: all 0.5s ease;
   ${Mobil({ fontSize : "10px" , marginLeft:"7px"})}
&:hover{
  color:red;
  transform: scale(1.0);
}  

` 

const Input = styled.input`
 border : none;
 outline: 0;
 width: 60%;
 ${Mobil({ width : "50px"})};

`
const Logo = styled.h1`
 font-weight: bold;
 margin-left: 90px;
 ${Mobil({ fontSize : "20px"})}
 ${Mobil({ marginLeft : "20px"})}
`


const SearchContainer = styled.div`
 border: 1px solid lightgray;
 display:flex;
 align-items: center;
 margin-left: 1px;
 padding: 4px  10px;
 background: white;
 ${Mobil({ display : "none"})};

 
`
const SearchContainerM = styled.div`
 display:none;
 ${Mobil({ display : "flex"})};
 ${Mobil({ marginLeft : "10px"})};
 ${Mobil({ padding : "0px"})};
 ${Mobil({ marginRight : "5px"})};
 
`
const Options = styled.span`
 font-size: 14px;
 cursor: painter;
 display: none;

 ${Mobil({ display : "flex"})}

` 
const OptionsCont = styled.div`
  display: flex;
  align-items: center;
  ${Mobil({ display : "none"})}

`;

const Container = styled.div`
  height : 60px;
  background:rgb(250,250,250);
  ${Mobil({ height : "50px"})}
  position: relative;
  
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display : flex;
 justify-content: space-between;
 ${Mobil({ padding : "10px 0px"})}
 
`
const Left = styled.div`
  align-items: center;
  display:flex;
  flex : 1 ;


`
const Center = styled.div`
  flex : 1 ;
  align-items: center;
  justify-content: center;

`
const Right = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end
  flex : 1 ;
 ${Mobil({ flex : "2", justifyContent : "center"})}
 ${Mobil({ marginLeft : "5px"})}



`

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);

   return (
   	<Container>
         <Wrapper>
            <Left> 
               <Options onClick={()=>alert('list')}> 
                 <ListIcon/> 
               </Options> 
               <SearchContainerM>
                  <SearchIcon style={{color:"gray",fontSize:"18px"}}/>
                  <Input placeholder='Search'/>
               </SearchContainerM>
               <OptionsCont>
                  <MenuItem><a href="/Products/man" style={{textDecoration:'none', color:'black'}}><b>MAN</b></a></MenuItem>
                  <MenuItem><a href="/Products/woman" style={{textDecoration:'none', color:'black'}}><b>WOMEN</b></a></MenuItem>
                  <MenuItem><a href="/Products/kid" style={{textDecoration:'none', color:'black'}}><b>KIDS</b></a></MenuItem>
                  <MenuItem><a href="" style={{textDecoration:'none', color:'black'}}><b>BRANDS</b></a></MenuItem>
                  <MenuItem><a href="" style={{textDecoration:'none', color:'black'}}><b>SALE</b></a></MenuItem>
                  <MenuItem><a href="" style={{textDecoration:'none', color:'black'}}><b>GIFT CARDS</b></a></MenuItem>
               </OptionsCont>
            </Left>
            <Center><Logo><a href="/" style={{textDecoration:'none' ,color:'black'}}>center.com</a></Logo></Center>
            <Right>
              <SearchContainer>
                  <SearchIcon style={{color:"gray",fontSize:"18px"}}/>
                  <Input placeholder='Search'/>
              </SearchContainer>
              <MenuItem><a href="/Register" style={{textDecoration:'none', color:'black'}}>Register</a></MenuItem>
              <MenuItem><a href="/Login" style={{textDecoration:'none', color:'black'}}>Sing In</a></MenuItem>
              <Link to='/Cart'>
               <MenuItem>
                 <Badge badgeContent={quantity} color="primary" >
                 <ShoppingCartIcon style={{color:"gray",fontSize:"25px"}} />
                 </Badge>
               </MenuItem>
              </Link> 
            </Right>
         </Wrapper>
   	</Container>)
}

export default Navbar
// 
// Lorem ipsum dolor, sit amet consectetur adipisicing elit.
// Reiciendis officia, eum accusantium enim soluta, delectus velit adipisci. 
// Iste debitis ullam culpa sequi non doloremque incidunt et sunt ut deleniti, dolorum!

