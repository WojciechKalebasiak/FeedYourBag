import axios from "axios";
import * as actionTypes from "./actionTypes";
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
export const handlePayment = token => async dispatch => {
  const res = await axios.post("/api/payment", token);
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
export const sendSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys/new", values);
  history.push("/dashboard");
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: actionTypes.FETCH_SURVEYS, payload: res.data });
};
