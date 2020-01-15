import React from "react";
import "./card.styles.css";

export const Card = props => {
  console.log("Props: ", props);
  return (
      <span className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2> {props.monster.name}</h2>
        <p>Email: {props.monster.email}</p>
        <p>Company: {props.monster.company.name}</p>
      </span>
  );
};
