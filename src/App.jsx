import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import './App.css'

function App() {
  
  const [ users, setUsers ] = useState([]);


  async function fetchUsers() {
    const response = await fetch('http://localhost:7000/allUsers', {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    }) 

    const result = await response.json();
    // console.log(result);
    // storing inside the setUser
    setUsers(result.message);
  }


  useEffect(()=> {
    // fetchUsers function call after componentDidMount
    fetchUsers();
    
  }, []);

  return (
    <>
      <section className='users'>
        <h1>Users</h1>

        <div className='users-div'>
          {
            users.length > 0 &&
            users.map((user) => {
              return (
                <Link key={user._id} to={`/details/${user._id}`}>
                  <p key={user._id}>{user.username}</p>
                </Link>
              )
            })
          }
        </div>  
      </section>
    </>
  )
}

export default App
