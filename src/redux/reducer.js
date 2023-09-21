import { data } from "../Data";
import { Adding_movie, Delete_movie } from "./actionTypes";

const reducer = (state = data, { type, payload }) => {
  switch (type) {
    case Delete_movie:
      return {
        ...state,
        movies: state.movies.filter((el) => el.id !== payload),
      };

    case Adding_movie:
      return {
        ...state,
        movies: [...state.movies, payload],
      };

    default:
      return state;
  }
};

export default reducer;
