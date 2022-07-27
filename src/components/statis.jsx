import 	React from 'react';
import styled from 'styled-components'
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(111, 126, 140, 0.2);
  backdrop-filter: blur(4px);
`;

const Static = ({menuOpen, setMenuOpen, category, setCategory}) => {
  
  return(
    <Container onClick={()=>setMenuOpen(false)} style={{zIndex : `${menuOpen === true ? '50' : '0'}`, position: `${menuOpen === true ? 'fixed' : 'static'}`}}>      
    </Container>
  )

}

export default Static;
