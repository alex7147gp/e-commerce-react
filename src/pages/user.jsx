import  Navbar from '../components/Navbar';
import  Announcement from '../components/Announcement.jsx';
import  Ofert from '../components/ofert.jsx';
import  Newslatter from '../components/Newslatter.jsx';  
import  Footer from '../components/Footer.jsx';  
import styled from "styled-components";
import {loginDelete} from '../redux/apiCalls';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Container = styled.div`


`;

const Wraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color:rgb(33, 49, 60);
  color: white;
`;

const ContImg = styled.div`
  
  width: 100%;
  height: 200px;
  margin: 20px;
  display: flex; 
  align-items:center;
  justify-content:center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgb(254, 247, 227);
  display: flex; 
`;

const Iten = styled.span`
  display: flex;
  font-size: 15px;
  margin-top: 10px;
`;

const Boton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: rgb(254, 247, 227);
  border: 1px solid rgb(137, 151, 155);
  margin-top: 20px;
`;

const User = () =>{
  
  const user = useSelector((state)=> state.user.currentUser);

  const {isFetching, error} = useSelector((state)=> state.user)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = () =>{
    loginDelete(dispatch)
    error ? console.log('error in userDelete') : navigate('/')
  }

  return (
    <Container>
        <Announcement/>
        <Navbar/>  
        <Ofert/>
    	  <Wraper>
          <ContImg>
            <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaJbQ2R3UrpJ1E-BSXQuxLLiVR23o656Mug&usqp=CAU' alt=''/>
            <Iten>{user.username}</Iten>
            <Iten>{user.email}</Iten>
            <Boton onClick={()=>handleClick()}>Exit</Boton>
    	    </ContImg>
        </Wraper>
    	<Newslatter/>
        <Footer/>
    </Container>
  )

}

export default User;