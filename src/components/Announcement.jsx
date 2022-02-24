import styled from "styled-components";


const Contenedor = styled.div`
  height : 30px;
  background: teal;
  color: white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  font-weight:500;

` ;

const Announcement = () => {
	return(
     <Contenedor>
       Super deal Free Shiping on Orders Over $50
     </Contenedor>                                       
	)
}

export default Announcement