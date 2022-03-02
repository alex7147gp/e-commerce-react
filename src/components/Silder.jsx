import styled from "styled-components";
import {useState, useEffect} from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import shoesJson from '../utils/shoes.json';
import {Mobil} from '../responsive';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

 const shoes = shoesJson;
const Contenedor = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  background-color:;
  position: relative;
  overflow:hidden;
 ${Mobil({ display : "none"})}
 ${Mobil({ height : "70vh"})}
` ;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50% ;
  display: flex; 
  align-items:center;
  justify-content:center;
  position: absolute;
  top: 0;
  bottom:0;
  left:${props => props.direction === 'left' && '10px'};
  right:${props => props.direction === 'right' && '10px'};
  cursor: pointer;
  margin: auto;
  z-index: 2;
 ${Mobil({ width : "25px", height : "25px"})}


`
const Wrapper = styled.div`
  height: 100%;
  display: flex;  
  transition: all 1.5s ease;
  transform:translateX(${(props) => props.SliderIndex * -100 }vw);
 ${Mobil({ height : "70%"})}
`;

const Slide = styled.div`
 width:100vw;
 height:100vh;
 display: flex;
 align-items: center;
 background-color:${props=>props.bg};

`;
const ImgContainer =styled.div`
  height:65%;
  margin-left: 70px;
  flex:1;
 ${Mobil({ height : "40%"})}
`;
const InfoContainer = styled.div`
  flex:1;
  padding:80px;
`;

const Img = styled.img`
  height:80%;
  padding-left:150px
 ${Mobil({ height : "50%", })}
`;

const Title = styled.h1`
  font-size: 50px
`;
const Description = styled.p`
  margin:20px 0;
  font-size: 20px

`;

const Boton =styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor:pointer;

`;



const   Silder = () => {
  
  const [product, setProduct] = useState([]);

  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction)=>{
    if(direction === 'left'){  
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 0);

    }
    else{
      setSliderIndex(sliderIndex < 6 ? sliderIndex + 1 : 6);
    }  
  }
  
  useEffect(()=>{
    const getProduct = async()=>{
      try{
         const res = await axios.get('https://data-shop-jcc.herokuapp.com/api/product');
         setProduct(res.data); 
      }
      catch(err){
        console.log(err)
      }
    }

    getProduct();
  },[]) 

	return(
     <Contenedor>
       <Arrow direction='left' onClick={()=> handleClick("left")}>
         <KeyboardDoubleArrowLeftIcon/>
       </Arrow>
       <Wrapper  SliderIndex={sliderIndex}>
         {product.slice(0,8).map(slider =>
          <Slide bg={slider.color} key={slider.id}>
            <ImgContainer>
              <Img  src={slider.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{slider.title}</Title>
              <Description>{slider.desc}</Description>          
              <Link to={`/Product/${slider._id}`}  itemId={slider._id}>
                <Boton>shop now</Boton>
              </Link>  
            </InfoContainer>
          </Slide>
          )}   
       </Wrapper>      
       <Arrow direction='right' onClick={()=> handleClick("right")}>
        <KeyboardDoubleArrowRightIcon/>
       </Arrow>
     </Contenedor>                                       
	)
}

export default Silder;


