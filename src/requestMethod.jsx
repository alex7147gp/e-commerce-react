import axios from 'axios';
import {useState, useEffect} from 'react';

const BASE_URL = "http://localhost:5000/api/"

  	const getStorage = async () =>{
       const Token = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;     
       return Token;
  	}

export const publicRequest = axios.create({
	baseURL: BASE_URL
}) 

export const useRequest = axios.create({
	baseURL: BASE_URL,
	header:{token:`Bearer ${getStorage()}`}
}) 