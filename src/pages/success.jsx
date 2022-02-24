import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
   
`;
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-bottom :15px;
`;
const Boton = styled.button`
   width: 150px;
   height: 50px;
   background-color: teal;
   color: white;
   border-radius: 20px;
   margin-bottom: 15px;
   font-size: 19px;

`;
const Span = styled.div`
   width: 350px;

`;



const Success = () =>{
	return(
       <Container>
         <Wrapper>
           <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaJbQ2R3UrpJ1E-BSXQuxLLiVR23o656Mug&usqp=CAU' alt=''/>
           <Boton>
             Successfull
           </Boton>
           <Span>
             Your order is being prepared. Thanks from
             choosing Center Shop.
           </Span>
         </Wrapper>
       </Container>
	)
}

export default Success