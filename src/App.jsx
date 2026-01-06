import { useEffect, useState } from 'react'
import './App.css'
import UserList from './users'
import axios from "axios";

function App() {

  const [title, setTitle] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      console.log('Fetching users from API...');
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = await axios.get(url).then(res => res.data);
      setUsers(data);
    } catch (error) {
      console.error(err);
    }
  };

  const sayMyName = (name) => {
    alert(`Hello, ${name}!`);
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <UserList
        title={title}
        users={users}
        sayMyName={sayMyName}
      />
    </div>
  )
}

export default App
