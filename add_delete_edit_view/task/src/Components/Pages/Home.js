import React , {useState , useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

 function Home() {

    const [users , setUsers] = useState([])

    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data  );
        
      };

      const deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
      }
   

  return (
    <div className='container'>
      <div className='cont'>
        <h1>Page Home</h1>
        <table class="table border shadow">
        <thead class="table-dark">
    <tr>
      <th scope="col">Num</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>   
    {users.map((user , index)=>(
        <tr>
            <th scope='row'>{index + 1}</th>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>

            <td>
              <Link class="btn btn-primary m-2" to={`/users/${user.id}`}>View</Link>
              <Link class="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link>
              <Link class="btn btn-danger m-2" onClick={() => deleteUser(user.id)}>Delete</Link>

            </td>
        </tr>
     ))} 
  </tbody>
</table>

    </div>
    </div>
  )
}

export default Home;