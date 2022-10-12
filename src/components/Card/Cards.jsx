import React from "react";
import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

// const cards = [
//   { id: 1, temp: "18 °C", lat: "-24.1950", long: "-65.3138" },
//   { id: 2, temp: "18 °C", lat: "-24.1950", long: "-65.3138" },
//   { id: 3, temp: "18 °C", lat: "-24.1950", long: "-65.3138" },
//   { id: 4, temp: "18 °C", lat: "-24.1950", long: "-65.3138" },
//   { id: 5, temp: "18 °C", lat: "-24.1950", long: "-65.3138" },
// ];

const Cards = ({ cards }) => {
  // const [cardList, setCardList] = useState(cards);
  console.log(cards);
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          ubication={card.ubication}
          temperature={card.temperature}
          latitude={card.latitude}
          longitude={card.longitude}
        />
      ))}
    </div>
  );
};

export default Cards;
