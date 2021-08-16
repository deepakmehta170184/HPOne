import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FETCH_DEFAULT_MOVIES_REQUEST } from "../../utils/constant";

const fetchMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = useCallback(
    () => dispatch({ type: FETCH_DEFAULT_MOVIES_REQUEST, payload: "Avengers" }),
    [dispatch]
  );
  return {
    fetchMovies,
  };
};

export default fetchMovies;
