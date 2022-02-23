import React from "react";
import "./Card.scss";

export default function Card({ id, name, email, phoneNumber }) {
  return (
    <div className="cardContainer">
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}
