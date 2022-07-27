import styled from "styled-components";
import categorieJson from '../utils/categorie.json';
import CategoryItem from './categoryItem';
import {Mobil} from '../responsive'

const Container = styled.div`
  display: flex;
  padding:20px;
  justify-content: space-between;
  scroll-snap-align: start;
 ${Mobil({ padding : "0px", flexDirection : "column"})}

`;
const categorie = categorieJson;
const Categories = ()=> {
	return (
     <Container>
     {categorie.map(item =>
       <CategoryItem  item={item} key={item.id}/>
        	
     )}
     </Container>
	)
}

export default Categories