import  Product from './pages/Product'
import  Register from './pages/Register' 
import  Login from './pages/login' 
import  Cart from './pages/Cart' 
import  Home from './pages/home'
import  ProductList from './pages/ProductList'
import  Success from './pages/success'
import  User from './pages/user'
import {BrowserRouter as Router, Routes, Route, Redirect, Navigate} from 'react-router-dom'              
import {useSelector} from 'react-redux' 

 
const App = () => {
  const user = useSelector((state)=> state.user.currentUser);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products/:category" element={<ProductList/>}/>
          <Route path="/Cart"  element={<Cart/>}/>
          <Route path="/User"  element={user ? <User/> : <Navigate replace to='/'/>}/>
          <Route path="/Login" element={user ? <Navigate raplace to='/'/> : <Login/>}/>
          <Route path="/Product/:id"  element={<Product/>}/>  
          <Route path="/Register"  element={user ? <Navigate replace to='/'/> : <Register/>}/>
          <Route path="/Success"  element={<Success/>}/>
        </Routes>  
    </Router>
  )
};

export default App;

// {user ? <Redirect to="/"> : <Login/>}