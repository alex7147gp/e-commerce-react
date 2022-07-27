import styled from "styled-components";
import {useState} from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {Mobil} from '../responsive'



const Container = styled.div`
  display: flex;
  background-color: #171e40;
  color: white; 
  font-size: .75rem;
 ${Mobil({ flexDirection : "column"})}


`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px
 
 
  
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobil({ backgroundColor : "rgb(10,50,100)"})}

  
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const Lista = styled.ul`
  margin: 0; 
  padding: 0; 
  list-style: none; 
  display: flex;
  flex-wrap: wrap;
  
`;
const Items = styled.li`
  width: 50%;
  margin-bottom: 6px;
`;

const Logo = styled.h1`
   font-weight: bold;
   margin-bottom: 20px;

`;
const Desc = styled.p`
   margin-bottom: 20px;
  
 
`;
const SocialContainer = styled.div`
  display: flex;

`;
const SocialItem = styled.div`
  margin: 10px;
  padding: 3px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center; 
 ${Mobil({ width : "30px" , height : "30px"})}

 `;

 const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-content: center;
 `;

 const Payment = styled.img`
  width:280px;
  height: 40px;
  padding-top:20px;
 ${Mobil({ width : "200px", height : "30px"})}
 `;



const Footer = () => {
  return(
   <Container>
      <Left>
        <Logo>Center.com</Logo>
        <Desc>That’s exactly what Kuerbis and his team at Nike did. After studying the previous models, the team decided</Desc>
        <SocialContainer>
           <SocialItem color='385999'>
              <FacebookIcon style={{color:"",fontSize:"28px"}}/>
           </SocialItem>
           <SocialItem color='E4405F'>
               <InstagramIcon style={{color:"",fontSize:"28px"}}/>
           </SocialItem>
           <SocialItem color='55CAEE'>
               <TwitterIcon style={{color:"",fontSize:"28px"}}/>
           </SocialItem>
        </SocialContainer>
      </Left>
      <Center>
         <Title>Your Acount</Title>
         <Lista>
            <Items>My Account</Items>
            <Items>Check Order</Items>
            <Items>Rewards</Items>
            <Items>Gift Cards</Items>
            <Items>Payment</Items>
            <Items>Contact Us</Items>
            <Items>Returns</Items>
            <Items>FAQ</Items>
            <Items>Privacy Policy</Items>
         </Lista>
      </Center>
      <Right>
         <Title>Contact</Title>
         <ContactItem>
          <AddLocationIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
         </ContactItem> 
         <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
         </ContactItem>
         <ContactItem>
          <EmailIcon style={{marginRight:"10px"}}/> Center@gmail.com
         </ContactItem>
         <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWA5kqwZR63rkyAF90ccKk4VAB28WG96VVmvwXnq2o5660x9VjUet0uxOfC4yeY87-w&usqp=CAU"/>
      </Right>
   </Container>
  	)
}

export default Footer