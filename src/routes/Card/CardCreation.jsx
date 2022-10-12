import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../context/CardsContext";
import { getForecast } from "../../service";

const CardCreation = () => {
  const { cards, setCards } = useContext(CardsContext);
  const navigate = useNavigate();

  // TODO: Usar aqui el localStorage para guardar las tarjetas

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    getForecast(data)
      .then((res) => {
        const newCard = {
          id: cards.length + 1,
          ubication: data.name,
          latitude: res.latitude,
          longitude: res.longitude,
          temperature: res.current_weather.temperature,
        };
        setCards([...cards, newCard]);
        // TODO: mostrar alert
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className=""
          type="text"
          placeholder="Ubicación"
          {...register("name", {
            required: "Debe ingresar el nombre de la ubicacion",
          })}
        />
        <p>{errors.name?.message}</p>
        <input
          className=""
          type="text"
          placeholder="Latitud"
          {...register("latitude", {
            required: "Debe ingresar la latitud",
          })}
        />
        <p>{errors.latitude?.message}</p>
        <input
          className=""
          type="text"
          placeholder="Longitud"
          {...register("longitude", {
            required: "Debe ingresar la longitud",
          })}
        />
        <p>{errors.longitude?.message}</p>
        <button className="btn-form" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CardCreation;
