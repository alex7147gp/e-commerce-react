import styled from "styled-components";
import {useState, useEffect} from "react";
import  Navbar from '../components/Navbar'
import  Announcement from '../components/Announcement.jsx'  
import  Silder from '../components/Silder.jsx'  
import  Categories from '../components/categories.jsx'  
import  Products from '../components/products.jsx'  
import  Newslatter from '../components/Newslatter.jsx'  
import  Footer from '../components/Footer.jsx'  
import  Ofert from '../components/ofert.jsx';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'   
import {Mobil} from '../responsive'
import {publicRequest}from '../requestMethod.jsx'
import {addProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'
 

 
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
 ${Mobil({ flexDirection : "column"})}
  
`;
const ImgContainer = styled.div`
  
  width: 97%;
  height: 90vh;
  flex:1 ;


`;

const Image = styled.img`
  
  width: 90%;
  height: 60%;
  margin:50px 20px;
  padding: 20px 20px;



`;

const InfoContainer = styled.div`
  
  flex: 1;
  padding: 10px 50px ;
 ${Mobil({ padding : "0px"})}


`;

const Title = styled.h1`

   font-weight: 200;

`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;


`;
const FilterTitle = styled.span`
   font-size: 20px;  
   font-weight: 200;
`;
const FilterColor = styled.option`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=> props.color} ;
   margin: 0px 5px;
   cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  justify-content: space-between;
  display: flex;
  align-items: center;
 ${Mobil({ width : "70%"})}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
 ${Mobil({ padding : "5px"})}
  &:hover{
     background-color: #f8f4f4;
  } 

`;


const Product = ()=> {
   

   const location = useLocation();
  
   const id = location.pathname.split('/')[2];
   
   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(1);

   const dispatch = useDispatch();
  
    useEffect(() =>{
     
     const getProduct = async() =>{
        try{
          const res = await publicRequest.get("/product/find/"+id)
          setProduct(res.data)
        }
        catch(err){

        }
     }

     getProduct()

   },[id])
     
     const colorL = async () => {
       const color = await product.color; 
       return color ;
     }

     const sizeS = async () => {
       const size = await product.size; 
       return size ;
     }


     const handleQuantity = (type) =>{
      if(type === 'desc'){
        quantity > 1 && setQuantity(quantity - 1);
      }
      else{
        setQuantity(quantity + 1);
      }
     }
     

   const handleClick = ()=>{
   //update cart
   dispatch(addProduct({ ...product, quantity, colorL, sizeS})); 
   }; 
 
   return(
     
    <Container>
       <Navbar/>
       <Announcement/>
       <Ofert/>
       <Wrapper>
         <ImgContainer>
            <Image src={product.img}/>
         </ImgContainer>
         <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>${product.price}</Price>
            <FilterContainer>
               <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor key={product.color}color={product.color}/>
               </Filter>
               <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption key={product.size}>{product.size}</FilterSizeOption>
                  </FilterSize>
               </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveShoppingCartIcon onClick={()=>handleQuantity('desc')}/>
                <Amount>{quantity}</Amount>
                <AddShoppingCartIcon onClick={()=>handleQuantity('inc')}/>
              </AmountContainer>  
              <Button onClick={()=>handleClick()}>ADD TO CART</Button>
            </AddContainer>
         </InfoContainer>
       </Wrapper>
       <Newslatter/>
       <Footer/>
    </Container>
   	)

}

export default Product




