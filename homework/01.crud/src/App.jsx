import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom"
import axios from "axios"
import Movies from "./components/Movies";
import AddEdit from "./AddEdit";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/addedit/:id' element={<AddEdit />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
