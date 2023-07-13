import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState ,useEffect} from 'react'

const Home = () => {

  const [users,setUser]=useState([])

  useEffect(()=>{
    loadUsers();
  },[])
  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:3003/users");
    setUser(result.data)
  }
  return (

    <div className='container'>
        <div className='py-4'>
          <Navbar></Navbar>
            <br></br>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home