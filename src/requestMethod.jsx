import axios from 'axios';
import {useState, useEffect} from 'react';

const BASE_URL = "https://data-shop-jcc.herokuapp.com/api/"

  	const getStorage = async () =>{
       try{  
         const Token = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;     
         return Token;
  	}
  	catch(err){
  		console.log(err);
  	}
  	}

export const publicRequest = axios.create({
	baseURL: BASE_URL
}) 

export const useRequest = axios.create({
	baseURL: BASE_URL,
	header:{token:`Bearer ${getStorage() === null ? '' : getStorage}`}
}) 