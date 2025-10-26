import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Home = () => {

    const [user, setUser]=useState([]);

    // const {id}=useParams()
    useEffect(()=>{
    loadUser();
    },[])
    const loadUser=async()=>{
        const result=await axios.get(" http://localhost:8080/user/all");
        setUser(result.data)
        

    }
    const deleteUser=async (param) => {
        await axios.delete(`http://localhost:8080/user/id?id=${param}`)
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
    {
       user.map((user,index)=>(
        <tr  key={user.id||index}>
      <th scope="row" >{index+1}</th>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.email}</td>
      <td>
        
    <Link to={`/edituser/${user.id}`} className="btn btn-outline-info mx-2">Edit</Link>
       <button type="button" className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>

      </td>
    </tr>
    

       ))

    }
  </tbody>
</table>

        </div>
    </div>
  )
}

export default Home