import React from "react";
import Card from "./Card";

const Cards = ({ users }) => {
  return (
    <div className="cards">
      {users.map(user=> <Card user={user} />)}
    </div>
  );
};

export default Cards;
