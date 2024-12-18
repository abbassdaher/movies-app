import axios from "axios";
import { allMoveis, filltredMovies, getpage } from "../types/moviesType";

export const getAllMoveis = (page = 1, language = "en-US") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5835097ab608205f211ea3c019e725a6&
              language=${language}&
              page=${page}`
    );
    // console.log(response);

    dispatch({ type: allMoveis, data: response.data });
  };
};

export const getMoveis = (word) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=5835097ab608205f211ea3c019e725a6`
    );
    dispatch({ type: allMoveis, data: response.data });
  };
};

export const getPage = (page) => {
    return async (dispatch) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5835097ab608205f211ea3c019e725a6&
              language="en-US"&page=${page}`
      );
      dispatch({ type: allMoveis, data: response.data });
      console.log(page)
    };
  };