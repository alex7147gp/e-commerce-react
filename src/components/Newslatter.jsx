import styled from "styled-components";
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import shoesJson from '../utils/shoes.json';
import {Mobil} from '../responsive'


 const shoes = shoesJson;

const Container = styled.div`
  height:60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
 ${Mobil({ height : "50vh"})}
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
 ${Mobil({ fontSize : "30px"})}
`;
const Descriccion = styled.p`
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 20px;
 ${Mobil({ fontSize : "15px"})}

`;
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between; 
   border: 1px solid lightgray;
 ${Mobil({ width : "60%"})}


`;
const Input = styled.input`
  border: none;   
  flex: 8;
  margin-left: 20px;
  outline: 0; 
}

`;
const Booton = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  
`;



const Newlastter = () =>{
  return (
    <Container>
      <Title>Newlastter</Title>
      <Descriccion>Get timaly updates from your favorite products</Descriccion>
      <InputContainer>
         <Input placeholder='Your emil'/>
         <Booton>
             <SendIcon/>
         </Booton>
      </InputContainer>
    </Container>
  	)

}        

export default Newlastter