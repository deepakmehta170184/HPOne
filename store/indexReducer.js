import { combineReducers } from "redux";
import defaultMoviesReducer from "./reducers/fetchMoviesReducer";
export default combineReducers({
  defaultMovies: defaultMoviesReducer,
});
