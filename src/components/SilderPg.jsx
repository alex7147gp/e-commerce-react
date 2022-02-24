import styled from "styled-components";
          

const Slide = styled.div`
 width:86vw;
 padding-left:150px;
 height:100vh;
 display: flex;
 align-items: center;
 background-color = {props=>props.bg}

`;
const ImgContainer =styled.div`
  height:65%;
  flex:1;
`;
const InfoContainer = styled.div`
  flex:1;
  padding:80px;
`;

const Img = styled.img`
  height:80%;
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


          
const SliderPg = (props) =>{ 
return(
          <Slide bg='fcf1ed'>
            <ImgContainer>
              <Img  src={props.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{props.title}</Title>
              <Description>{props.desc}</Description>          
              <Boton> shop now</Boton>
            </InfoContainer>
          </Slide>

  )
}

export default SliderPg;