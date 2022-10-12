import React from "react";
import { Link } from "react-router-dom";
import CardCreation from "../Card/CardCreation";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Link to="card/create">Nueva</Link>
    </div>
  );
};

export default Navigation;
