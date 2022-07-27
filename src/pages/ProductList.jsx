import styled from "styled-components";
import {useState} from "react";
import {BrowserRouter as Router, useLocation, Link} from 'react-router-dom'              
import  Navbar from '../components/Navbar'
import  Announcement from '../components/Announcement.jsx'  
import  Silder from '../components/Silder.jsx'  
import  Categories from '../components/categories.jsx'  
import  Products from '../components/products.jsx'  
import  Newslatter from '../components/Newslatter.jsx'  
import  Footer from '../components/Footer.jsx'  
import  Ofert from '../components/ofert.jsx'  
import {Mobil} from '../responsive'




const Container = styled.div`
 overflow-y: hidden; 
`;
const Title = styled.h1`
 
 margin: 30px;
 ${Mobil({ padding : "0px", widtth : "60%"})}
`;

const FilteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
 margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
 ${Mobil({ margin : "15px"})}
`;
const Option = styled.option`

`;

const ProductList = () => {
  
  const location = useLocation();
  
  const cat = location.pathname.split('/')[2];
  
  const [filters, setFilters] = useState();
  const [sort, setSort] = useState('newest');


  const handleFilters = (e) =>{
    const value = e.target.value ;
    setFilters({...filters, [e.target.name] : value,});
  };



 return( 
   <Container>
      <Announcement/>
      <Navbar/>
      <Ofert/>
      <Title>{cat}</Title>
      <FilteContainer>
        <Filter>
          <FilterText>
            Filter Products
          </FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled selected >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Orange</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sorts Products
          </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilteContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newslatter/>
      <Footer/>
   </Container>
 )	  
}

export default ProductList