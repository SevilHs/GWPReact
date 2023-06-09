import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
const BASE_URL = "http://localhost:8000/movies";

const Home = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    let res = await axios(BASE_URL);
    let data = await res.data;
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <Movies data={data} setData={setData} />
    </>
  );
};

export default Home;
