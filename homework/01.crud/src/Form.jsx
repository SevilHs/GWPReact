import axios from 'axios';
import React, { useState } from 'react'
import {  useParams } from 'react-router-dom';
const BASE_URL = "http://localhost:8000/movies";



const Form = () => {
    const [input, setInput] = useState({
        Title:"",
        Director:"",
        Year:"",
        Imdb:"",
    })

    const {id}=useParams()
    if({id}){
        const editData= async()=>{
            let res=await axios(`${BASE_URL}/${id}`)
            let editData= res.data
            console.log(editData);
        }  
        editData()
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            setInput({
                Title: "",
                Director: "",
                Year: "",
                Imdb: ""
            });
              await axios.post(BASE_URL, input);
      };
  
     
     
  return (
    <>
        <h1>Form</h1>
        <form onSubmit={ handleSubmit} style={{width:"700px", display:"flex", flexDirection:"column",margin:"0 auto"}} >
            <label htmlFor="">Title:</label>
            <input type="text" placeholder='Enter a name...' value={input.Title} onChange={(e)=>setInput({...input,Title:e.target.value})}/>
            <label htmlFor="">Director:</label>
            <input type="text" placeholder='Enter a director name...'  value={input.Director} onChange={(e)=>setInput({...input,Director:e.target.value})} />
            <label htmlFor="">Year:</label>
            <input type="number" placeholder='Enter year...' value={input.Year} onChange={(e)=>setInput({...input,Year:e.target.value})} />
            <label htmlFor="">Imdb:</label>
            <input type="number" placeholder='Enter Imdb raiting...' value={input.Imdb}  onChange={(e)=>setInput({...input,Imdb:e.target.value})} />
            <button type='submit' className='btnForm'>Add Movie</button>
        </form>
    </>
  )
}

export default Form