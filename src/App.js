import React from 'react'
import {  Routes, Route, Router } from 'react-router-dom'
// import { Navbar } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/layout/Navbar";
import Navbar from '../src/layout/Navbar'
import Home from './pages/Home'
import AddUser from './User/AddUser'
import EditUser from './User/EditUser';

const App = () => {
  return (
    <div>

  <Navbar/>
<Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/adduser" element={<AddUser/>}></Route>
  
    <Route exact path="/edituser/:id" element={<EditUser/>}></Route>

  </Routes> 
  
    </div>
  )
}

export default App