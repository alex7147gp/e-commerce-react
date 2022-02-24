import styled from "styled-components";
import {useState ,useEffect} from "react";
import {Mobil} from '../responsive'


const list = [{
  oferts:'Need an last minute Gift? Check out whit code FROSTY',
  },{
  oferts:'Take an Extra 30% Off Select Styles whit code FROSTY',
  }
]


const Container = styled.div`
  width:100%;
  display:flex;
  overflow:hidden;
`;
const Wrapper = styled.div`
  display: flex;  
  transition: all 1.5s ease;
  transform:translateX(${(props) => props.OfertIndex * -100 }vw);
`;  

const SliderO = styled.div`  
  height : 35px;
  width: 100vw; 
  background-color: #171e40;
  color: white;
  display: flex;
  align-items:center;
  justify-content: center; 
  font-size:14px;
  font-weight:500;
 ${Mobil({ fontSize : "10px"})}
` ;

const Desc = styled.p`
     cursor:pointer;
`;

const boton = styled.botton

const Ofert = () => {
	
   useEffect(() => {
     handleClick(true)
   }, []);


  const [ofertIndex, setOfertIndex] = useState(0);
  

  const handleClick = (activate)=>{
      
      if(activate){
          setOfertIndex(ofertIndex < 1 ? ofertIndex + 1 : 0);
  
      }  


}

const activa = true

  return(
    <Container> 
     <Wrapper OfertIndex={ofertIndex} activate = {activa} setInterval={()=> {handleClick()},6000 }> 
       {list.map(ofert=>   
        <SliderO>
          <Desc style={{marginRight:"10px"}} > 
           {ofert.oferts}
          </Desc>
          <a href="/Cart" style={{color:'white'}}>Shop Now</a>
        </SliderO>
        )}
     </Wrapper>
    </Container>                                        
	) 
}

export default Ofert  






// useEffect(() => {
//   const interval = setInterval((activate) => {
    // handleClick(true)
//   }, 2000);
//   return () => clearInterval(interval);
// }, []);