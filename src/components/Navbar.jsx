import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import {Mobil} from '../responsive'
import ListIcon from '@mui/icons-material/List';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import addProduct from '../redux/cartRedux';

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

`; 
const WraperCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

const Input = styled.input`
 border : none;
 outline: 0;
 width: 60%;
 ${Mobil({ width : "50px"})};

`
const Logo = styled.h1`
 font-weight: bold;
 display: flex;
 align-items: center;
 justify-content: center;
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
  width: 99vw;
  background:rgb(250,250,250);
  ${Mobil({ height : "50px"})}
  position: relative;
  display: flex;
  overflow-x: hidden;  
`
const Wrapper = styled.div`
 width: 100%;
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
  justify-content: flex-end;
  flex : 1 ;
 ${Mobil({ flex : "2", justifyContent : "center"})}
 ${Mobil({ marginLeft : "5px"})}

`


const Navbar = ({menuOpen, setMenuOpen, category, setCategory}) => {

  const quantity = useSelector(state=>state.cart.quantity);
  
  const handleClick = (type) => {
    console.log(category);  
    setCategory(type)
    setMenuOpen(true)

  }
  
  const locat = useLocation();
  
  console.log(locat.pathname);

  const user = useSelector((state)=> state.user.currentUser);

   return (
   	<Container style={{zIndex : `${menuOpen === true ? '75' : '0'}`, width : `${menuOpen === true ? '100vw' : '100%'}`}}>
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
                  <MenuItem onClick={()=>handleClick('man')} style={{color:`${menuOpen === true && category === 'man' ? 'rgb(23, 30, 164)' : 'black'}`}}><b>MAN</b></MenuItem>
                  <MenuItem onClick={()=>handleClick('women')} style={{color:`${menuOpen === true && category === 'women' ? 'rgb(23, 30, 164)' : 'black'}`}}><b>WOMEN</b></MenuItem>
                  <MenuItem onClick={()=>handleClick('kids')} style={{color:`${menuOpen === true && category === 'kids' ? 'rgb(23, 30, 164)' : 'black'}`}}><b>KIDS</b></MenuItem>
                  <MenuItem onClick={()=>handleClick('brands')} style={{color:`${menuOpen === true && category === 'brands' ? 'rgb(23, 30, 164)' : 'black'}`}}><b>BRANDS</b></MenuItem>
                  <MenuItem onClick={()=>handleClick('sale')} style={{color:`${menuOpen === true && category === 'sale' ? 'rgb(23, 30, 164)' : 'black'}`}}><b>SALE</b></MenuItem>
                  <MenuItem><a href="" style={{textDecoration:'none', color:'black'}}><b>GIFT CARDS</b></a></MenuItem>
               </OptionsCont>
            </Left>
            <Center><Logo><a href="/" style={{textDecoration:'none' ,color:'black'}}>center.com</a></Logo></Center>
            <Right>
              <SearchContainer>
                  <SearchIcon style={{color:"gray",fontSize:"18px"}}/>
                  <Input placeholder='Search'/>
              </SearchContainer>
              <WraperCount style={{display:`${user ? 'none' : 'flex'}`}}>
                <MenuItem><a href="/Register" style={{textDecoration:'none', color:'black'}}>Register</a></MenuItem>
                <MenuItem><a href="/Login" style={{textDecoration:'none', color:'black'}}>Sing In</a></MenuItem>
              </WraperCount> 
              <Link to='/User'>
                <Count style={{display:`${user ? 'flex' : 'none'}`}}>
                  <AccountCircleIcon/>
                </Count>
              </Link>
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

