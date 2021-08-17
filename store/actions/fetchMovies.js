/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  FETCH_DEFAULT_MOVIES_REQUEST,
  SEARCH_MOVIES_REQUEST,
} from "../../utils/constant";

const MoviesActions = () => {
  const dispatch = useDispatch();
  const fetchMovies = useCallback(
    (title) => dispatch({ type: FETCH_DEFAULT_MOVIES_REQUEST, payload: title }),
    [dispatch]
  );
  const searchMovies = useCallback(
    (search) => dispatch({ type: SEARCH_MOVIES_REQUEST, payload: search }),
    [dispatch]
  );
  return {
    fetchMovies,
    searchMovies,
  };
};

export default MoviesActions;
