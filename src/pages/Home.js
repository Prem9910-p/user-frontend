import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Home = () => {

 
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const [users, setUsers]=useState([]);

    // const {id}=useParams()
    useEffect(()=>{
    loadUser();
    },[])
    const loadUser=async()=>{
        const result=await axios.get( `${API_BASE_URL}/user/all`);
        setUsers(result.data)
        

    }
    const deleteUser=async (param) => {
        await axios.delete(`${API_BASE_URL}/user/id?id=${param}`)
        loadUser()
    }

  return (
    <div className='container'>
        <div className='py-4'>
         <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>    
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
          <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { users.length>0?(
       users.map((users,index)=>(
        <tr  key={users.id||index}>
      <th scope="row" >{index+1}</th>
      <td>{users.name}</td>
      <td>{users.age}</td>
      <td>{users.email}</td>
      <td>
        
    <Link to={`/edituser/${users.id}`} className="btn btn-outline-info mx-2">Edit</Link>
       <button type="button" className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(users.id)}>Delete</button>

      </td>
    </tr>
    

       ))
      ):(
        <tr>
          <td>no user found</td>
        </tr>
      )

    }
  </tbody>
</table>

        </div>
    </div>
  )
}

export default Home