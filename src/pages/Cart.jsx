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
import  Json from '../utils/products' 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'; 
import {Mobil} from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, useLocation, Link, useNavigate, useHistory} from 'react-router-dom';
import axios from 'axios';




const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
 ${Mobil({ padding : "10px" })}

`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;

`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
`;

const Topbutoon = styled.button`
  padding: 10px;
  font-weight: 600;
  align-content: center;
  cursor: pointer;
  border: ${props=> props.type === 'filled' && 'none'};
  background-color: ${props=> props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props=> props.type === 'filled' && 'white'};
`;


const Butoon = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobil({ flexDirection : "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`;

const TopTexts = styled.div`
 ${Mobil({ display : "flex" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;


const Product = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;
   ${Mobil({ flexDirection : "column" })}

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;: 
`;
const ProductName = styled.div`
  margin-bottom: 10px;
`;
const ProductId = styled.div`
  margin-bottom: 10px;

`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50% ;
  background-color: ${props=>props.color};
  margin-bottom: 10px;
  border: solid 1 black;
`;
const ProductSize = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: f;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${Mobil({ margin : "5px 15px"  })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${Mobil({ marginBottom : "20px"  })}

`;


const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItems = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === 'total' && '500'};
  font-size: ${props=>props.type === 'total' && '24px'};

`;
const SummaryItemsText = styled.div``;
const SummaryItemsPrice = styled.div``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-weight: 600;
`;

const ContProduct = styled.div`
`;

const Cart = () => {
  
  const cart = useSelector(state=>state.cart.products);
  
  const total = useSelector(state=>state.cart.total);
  
  const navigate = useNavigate();

  const shoes = Json;


  const estimateC = 9.99 ; 
   
  const estimateD = () =>{
    let totalD = total 
    totalD  /= 20;
    return totalD;
  }

  const Total = total - estimateD();

   
   const handleClick = (add, product) =>{
    if(add === 'res'){  
      product > 1  && (product - 1);
    }
    else{
      (product + 1);
    }  
   }
    const KEY = "pk_test_51KK8CTD9oGMKlIj9Y8bFKrRgqYA3862NfGLi64KJdhRmYwRX3zLgxqCTIbEqJ0avLgmM0GqVbkGXqsDbeT847lWs00Mu10Ehyk"
   
    const [stripeToken, setStripeToken] = useState(null);
 

      const onToken = (token) =>{
      setStripeToken(token);
      } 

   useEffect(()=>{
    const makeRequest = async () =>{
     try{
      const res = await axios.post("https://data-shop-jcc.herokuapp.com/api/checkout/payment",
        { 
          tokenId: stripeToken.id,
          amount: Total * 100,       
        },navigate('/success')
      );
      console.log(res.data)
     }
     catch(err){
      console.log(err)
     }
    };
    stripeToken && Total >= 1 && makeRequest()
   },[stripeToken, Total, navigate])

   return(
      <Container>
        <Announcement/>
        <Navbar/>  
        <Ofert/>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
           <Topbutoon> CONTINUE SHOPPING</Topbutoon>
           <TopTexts>
              <TopText> Shopping Bag(2)</TopText>
              <TopText> Your Wishlist (0)</TopText>
           </TopTexts>
           <Topbutoon type='filled'> CHECKOUT NOW</Topbutoon>
        </Top>
        <Butoon>
           <Info>
            {cart.map(item=>
            <ContProduct> 
             <Product>
              <ProductDetail>
                <Image src={item.img}/>
                <Details>
                  <ProductName><b>Porduct: </b> {item.title}</ProductName>
                  <ProductId><b>ID: </b> {item._id}</ProductId>
                  <ProductColor color={item.color}/>
                  <ProductSize><b> Size: </b> {item.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                 <ProductAmountContainer>
                   <AddIcon onClick={()=>handleClick('plus', item.quantity)}/>
                    <ProductAmount>{item.quantity}</ProductAmount>
                   <RemoveIcon onClick={()=>handleClick('res', item.quantity)}/>
                 </ProductAmountContainer>
                 <ProductPrice>
                     ${item.price}
                 </ProductPrice>
              </PriceDetail>           
             </Product>
             <Hr/>
            </ContProduct> 
            )}            
           </Info>           
           <Summary>
            <SummaryTitle>Order Sumary</SummaryTitle>
            <SummaryItems>
               <SummaryItemsText>Subtotal</SummaryItemsText>
               <SummaryItemsPrice>{total}</SummaryItemsPrice>
            </SummaryItems>
            <SummaryItems>
               <SummaryItemsText>Estimated Shipping</SummaryItemsText>
               <SummaryItemsPrice>${estimateC}</SummaryItemsPrice>
            </SummaryItems>            
            <SummaryItems>
               <SummaryItemsText>Subtotal</SummaryItemsText>
               <SummaryItemsPrice>${total + estimateC}</SummaryItemsPrice>
            </SummaryItems>            
            <SummaryItems>
               <SummaryItemsText>Shipping Discount</SummaryItemsText>
               <SummaryItemsPrice>${estimateD()}</SummaryItemsPrice>
            </SummaryItems>            
            <SummaryItems type='total'>
               <SummaryItemsText >Total</SummaryItemsText>
               <SummaryItemsPrice>${Total}</SummaryItemsPrice>
            </SummaryItems>
            <StripeCheckout
              name='Center Shop'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaJbQ2R3UrpJ1E-BSXQuxLLiVR23o656Mug&usqp=CAU'
              bullingAddress
              shippingAddress
              description={'Your total is $' + Total}  
              amount={Total * 100}
              token={onToken}
              stripeKey={KEY}
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
           </Summary>
        </Butoon>
      </Wrapper>
        <Newslatter/>
        <Footer/>
      </Container>
   	)

}

export default Cart

// 
            // <Product>
            //   <ProductDetail>
            //     <Image src={shoes[5].img}/>
            //     <Details>
            //       <ProductName><b>Porduct: </b> Nike407SR</ProductName>
            //       <ProductId><b>ID: </b> 3628933223</ProductId>
            //       <ProductColor color='black'/>
            //       <ProductSize><b> Size: </b> 42</ProductSize>
            //     </Details>
            //   </ProductDetail>
            //   <PriceDetail>
            //      <ProductAmountContainer>
            //        <AddIcon/>
            //         <ProductAmount>2</ProductAmount>
            //        <RemoveIcon/>
            //      </ProductAmountContainer>
            //      <ProductPrice>
            //          20$
            //      </ProductPrice>
            //   </PriceDetail>
            // </Product>