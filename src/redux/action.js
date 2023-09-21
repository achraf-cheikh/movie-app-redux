import { Adding_movie, Delete_movie } from "./actionTypes";

export const handleDelete = (MovieID) => {
  return {
    type: Delete_movie,
    payload: MovieID,
  };
};

export const movieadd = (newmovie) => {
  return {
    type: Adding_movie,
    payload: newmovie,
  };
};
