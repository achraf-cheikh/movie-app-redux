import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ text, stars, nature }) => {
  const { movies } = useSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {movies
        .filter((el) => {
          if (nature === "action") {
            return el.genre === "action";
          } else if (nature === "drama") {
            return el.genre === "drama";
          } else if (nature === "horror") {
            return el.genre === "horror";
          } else {
            return el;
          }
        })

        .filter(
          (el) =>
            el.title.trim().toUpperCase().includes(text.trim().toUpperCase()) &&
            el.rating >= stars
        )

        .map((el) => (
          <MovieCard key={el.id} el={el} />
        ))}
    </div>
  );
};

export default MovieList;
