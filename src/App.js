import * as React from "react";
import {Button} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import Login from './Login'
import Register from './Register'
import Protected from './Protected'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

function App() {
 return(
  <div className='App'>
    <BrowserRouter>
    <Switch>
    <Route  path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/add">
      <>
      <Protected Cmp={AddProduct} />
      </>      
    </Route>
    <Route path="/update/:id">
    <>
      <Protected Cmp={EditProduct} />
      </>
    </Route>
    <Route path="/search/">
    <>
      <Protected Cmp={SearchProduct} />
      </>
    </Route>
    <Route path="/" >
      <>
      <Protected Cmp={ProductList} />
      </>  
    </Route>   
    </Switch>
    </BrowserRouter>
  </div>
 )
}

export default App;
