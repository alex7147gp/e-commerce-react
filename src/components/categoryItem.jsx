import styled from "styled-components";
import {Mobil} from "../responsive";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Container = styled.div`
 flex:1;
 margin:3px;
 height: 70vh;
 position:relative;
`;
const Image = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 ${Mobil({ height : "30vh"})}



`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`; 
const Title = styled.h1`
    font-size: 50px;
    color:white;
    margin-bottom:20px
`;
const Botton = styled.button`
   borde:none;
   padding:10px;
   backaground-color:whide;
   color:gray;
   cursor:pointer;
   font-weight:600;
`;

const CategoryItem = ({item})=> {
	return (
     <Container>
      <Link to={`/products/${item.categorie}`}>
        <Image src={item.img} />
        <Info>
             <Title>{item.categorie}</Title>
             <Botton>Shop now </Botton>      
        </Info>
      </Link>
    </Container>
	)
}

export default CategoryItem


