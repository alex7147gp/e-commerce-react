import axios from 'axios';
import {useState, useEffect} from 'react';

const BASE_URL = "http://localhost:5000/api/"

 useEffect(()=>{
  	getStorage = async () =>{
       const res = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;     
  	   const TOKEN = res;
  	   return TOKEN
  	}
    
    getStorage();

  },[])

export const publicRequest = axios.create({
	baseURL: BASE_URL
}) 

export const useRequest = axios.create({
	baseURL: BASE_URL,
	header:{token:`Bearer ${TOKEN}`}
}) 