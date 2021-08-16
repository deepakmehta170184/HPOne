/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FETCH_DEFAULT_MOVIES_REQUEST } from "../../utils/constant";

const fetchMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = useCallback(
    (title) => dispatch({ type: FETCH_DEFAULT_MOVIES_REQUEST, payload: title }),
    [dispatch]
  );
  return {
    fetchMovies,
  };
};

export default fetchMovies;
