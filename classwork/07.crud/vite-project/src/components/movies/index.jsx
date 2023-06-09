import React from "react";
import Movie from "../movie";
import { uid } from "uid";
import "./style.scss";
import axios from "axios";
const BASE_URL = "http://localhost:8000/movies";

const Movies = ({ data, setData }) => {
  const deleteMovie = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    let filtered = data.filter((item) => item.id != id);
    setData(filtered);
  };

  return (
    <div className="container">
      <h1>Movies List</h1>
      <div className="row movieCards">
        {data.map((movie) => (
          <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
