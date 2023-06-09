import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()
  return (
    <>
        <button onClick={()=> navigate('/')}>Movies</button>
        <button onClick={()=> navigate('/addedit/id:')}>Add Movie</button>
    </>
  )
}

export default Header