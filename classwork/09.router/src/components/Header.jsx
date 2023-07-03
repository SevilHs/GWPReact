import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
      <div>
        <div className="buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/blog")}>Blog</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate(-1)}>Go prev</button>
        <button onClick={() => navigate(+1)}>Go next</button>
      </div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      </div>
  );
};

export default Header;
