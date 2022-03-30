import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();
  const astronauts = useSelector((state) => state.astronauts.entities);
  const status = useSelector((state) => state.astronauts.status)
  function handleClick() {
    dispatch(fetchAstronauts());
  }

  const astronautsList = astronauts.map((astro) => (
    <li key={astro.name}>{astro.name}</li>
  ));

  return (
    <div>
      <button onClick={handleClick}>Get Astronauts</button>
      {
        status === "loading" ? (
          <p>Loading...</p>
        ) : (
          astronautsList
        )
      }
    </div>
  );
}

export default Astronauts;
