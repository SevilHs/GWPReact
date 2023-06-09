import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Cards from './components/Cards'

function App() {
const BASE_URL="https://jsonplaceholder.typicode.com/users/1/todos"

const [users, setUsers] = useState([])

const getUsers= async()=>{
  const res= await axios(BASE_URL)
  const data=res.data
  setUsers(data)
}

useEffect(()=>{
  getUsers()
},[])

console.log(users);
  return (
    <>
      <Cards users={users} />
    </>
  )
}

export default App
  