import axios from 'axios';
import {useState, useEffect} from 'react';

const BASE_URL = "http://localhost:5000/api/"

 const [token, setToken] = useState('');

 useEffect(()=>{
  	const getStorage = async () =>{
       const res = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;     
  	   setToken(res);
  	}
    
    getStorage();

  },[])

export const publicRequest = axios.create({
	baseURL: BASE_URL
}) 

export const useRequest = axios.create({
	baseURL: BASE_URL,
	header:{token:`Bearer ${token}`}
}) 