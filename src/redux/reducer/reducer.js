import { getAllMoveis } from "../actions/movieAction";
import { allMoveis, filltredMovies } from "../types/moviesType";

const initialState = { movies: [] };
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case allMoveis:
      return { ...state, movies: action.data };
    
    default:
      return state;
  }
};
