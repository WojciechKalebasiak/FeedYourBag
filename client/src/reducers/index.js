import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import surveysReducer from "./surveysReducer/surveysReducer";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer
});
