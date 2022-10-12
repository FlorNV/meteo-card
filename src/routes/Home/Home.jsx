import React from "react";
import { useContext } from "react";
import Cards from "../../components/Card/Cards";
import { CardsContext } from "../../context/CardsContext";
import "./Home.css";

const Home = () => {
  const { cards } = useContext(CardsContext);
  return (
    <div>
      <Cards cards={cards} />
    </div>
  );
};

export default Home;
