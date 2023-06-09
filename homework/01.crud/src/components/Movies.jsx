import React from "react";
import Movie from "./Movie";
import axios from "axios";
const BASE_URL = "http://localhost:8000/movies";


const Movies = ({ data, setData }) => {
    const deleteMovie=async(id)=>{
        await axios.delete(`${BASE_URL}/${id}`)
        let res= await axios(BASE_URL)
        let updated=res.data.filter(item=> item.id!=id)
        setData(updated)
    }
    const editMovie= async(id)=>{
        let res=await axios(`${BASE_URL}/${id}`)
        let editData=res.data
        // console.log(editData);
    }
  return (
    <>
      <h1>Movies</h1>
      <div className="row">
        {data.map((movie) => (
          <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} editMovie={editMovie}/>
        ))}
      </div>
    </>
  );
};

export default Movies;
