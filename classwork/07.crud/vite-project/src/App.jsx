import "./App.css";
import axios from "axios";  
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Movies from "./components/movies";
import Form from "./components/form";
const BASE_URL = "http://localhost:8000/movies";

function App() {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    let res = await axios(BASE_URL);
    let data = await res.data;
    setData(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <>
    <Form/>
    <Movies data={data} setData={setData}/>
  </>;
}

export default App;
