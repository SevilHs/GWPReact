import React from "react";
import "./style.scss"

const Form = () => {
  return (
    <div className="form">
        <div className="container">
        <form>
      <label>
        Name:
        <br />
        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Year:
        <br />

        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Genre:
        <br />

        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Language:
        <br />

        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Imdb:
        <br />

        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" className="submit" />
    </form>   
    </div>
    </div>
    
    
  );
};

export default Form;
