import React from "react";

const Card = ({ ubication, temperature, latitude, longitude }) => {
  return (
    <div>
      <p>{ubication}</p>
      <p>Temperatura: {temperature}</p>
      <p>Latitud: {latitude}</p>
      <p>Longitud: {longitude}</p>
    </div>
  );
};

export default Card;
