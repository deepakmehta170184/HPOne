import {
  FETCH_DEFAULT_MOVIES_FULFILLED,
  FETCH_DEFAULT_MOVIES_REJECTED,
  FETCH_DEFAULT_MOVIES_REQUEST,
  SEARCH_MOVIES_FULFILLED,
  SEARCH_MOVIES_REJECTED,
  SEARCH_MOVIES_REQUEST,
} from "../../utils/constant";

const initialState = {
  isLoadingMovies: false,
  movies: [],
  count: 0,
  errors: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DEFAULT_MOVIES_REQUEST:
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        isLoadingMovies: true,
        movies: [],
        errors: {},
      };

    case FETCH_DEFAULT_MOVIES_FULFILLED:
    case SEARCH_MOVIES_FULFILLED:
      return {
        ...state,
        isLoadingMovies: false,
        movies: payload.movies,
        count: payload.count,
      };

    case FETCH_DEFAULT_MOVIES_REJECTED:
    case SEARCH_MOVIES_REJECTED:
      return {
        ...state,
        isLoadingMovies: false,
        errors: payload,
      };

    default:
      return state;
  }
};
export default reducer;
