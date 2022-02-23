import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList({ users }) {
  return (
    <div className="cardList">
      {users.map((user) => {
        return (
          <div className="cardContainer">
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
          </div>

          // <Card
          //   key={user.id}
          //   id={user.id}
          //   name={user.name}
          //   email={user.email}
          //   phoneNumber={user.phone_number}
          // />
        );
      })}
    </div>
  );
}
