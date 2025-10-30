import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {

  


let navigate=useNavigate()

const [user, setUser]=useState({ 
    name:"",
    age:"",
    email:""

})

const {name, age, email}=user;

const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
 const onSubmit=async(e)=>{
e.preventDefault()
await axios.post(" https://xyz-production-99f9.up.railway.app/user/add",user)
navigate("/")
 }

  return (
    <div>
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <div className='mb-3'>
                <form onSubmit={(e)=>onSubmit(e)}>
                <label htmlFor='name' className='form-label'> name</label>
                <input 
                type='text'
                className='form-control'
                placeholder='enter your name'
                name='name'
                required
                value={name}
                onChange={(e)=>onInputChange(e)}
                ></input>

                <label htmlFor='age' className='form-label'> age</label>
                <input 
                type='number'
                min="0" 
                max="100" 
                className='form-control'
                placeholder='enter your age'
                name='age'
                required
                value={age}
                onChange={(e)=>onInputChange(e)}
                ></input>

                <label htmlFor='email' className='form-label'> email</label>
                <input 
                type='email'
                className='form-control'
                placeholder='enter your email'
                name='email'
                required
                value={email}
                onChange={(e)=>onInputChange(e)}
                
                ></input>
                <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                <Link to={"/"} className='btn btn-outline-danger mt-3 mx-3'>Cancel</Link>
                </form>
            </div>


          </div>
        </div>
    </div>


    </div>
  )
}

export default AddUser