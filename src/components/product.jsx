import react from 'react';
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {BrowserRouter as Router, useLocation, Link} from 'react-router-dom';
import {addProduct} from '../redux/cartRedux';
import {useDispatch} from 'react-redux';   



const Info = styled.div`
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 display: flex;
 align-items:center;
 justify-content:center;
 transition: all 0.5s ease;
 cursor: pointer;
&:hover{
    background-color:rgba(0, 0, 0, 0.2);
	z-index:3; 
	transform: scale(1.0);
}

`;

const Container = styled.div`
   flex:1;
   margin: 5px;
   min-width: 280px;
   max-width: 380px;
   height: 350px;
   display:flex;
   align-items:center;
   justify-content:center;
   background-color:#f5fbfd;
   position:relative; 
`;

const Circle = styled.div`
  width: 200px;
  height:200px;
  border-radius:50% ;
  background-color:white;
  position:absolute;

`;
const Image = styled.img`
  height:60%;
  width:85%;
  z-index:2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items:center;
  display: flex;
  justify-content:center;
  margin: 10px;
  transition:all 0.5s ease; 
 &:hover{
	background-color: #e9f5f5;
	transform: scale(1.1);
}
`;


const Product = ({item}) =>{
    
    const colorL = async () => {
       const color = await item.color; 
       return color ;
    }

    const sizeS = async () => {
       const size = await item.size; 
       return size ;
    }

    const quantity =  1; 
    
    const dispatch = useDispatch();

    const handleClick = ()=>{
     //update cart
      dispatch(addProduct({ ...item, quantity, colorL, sizeS})); 
       
    }
    
	
    return ( 
     <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
           <Icon onClick={()=>handleClick()}>
               <ShoppingCartIcon/>
           </Icon>
           <Icon >
               <Link to={`/Product/${item._id}`}  itemId={item._id}>
                 <SearchIcon />
               </Link>
           </Icon>
           <Icon>
               <FavoriteIcon/>
           </Icon>
        </Info>   
     </Container>

	)
}

export default Product