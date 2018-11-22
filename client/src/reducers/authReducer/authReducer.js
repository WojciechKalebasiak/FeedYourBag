import { FETCH_USER } from "../../actions/actionTypes";
const initialState = {
  isAuthorized: null,
  user: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        isAuthorized: action.payload ? true : false,
        user: action.payload || null
      };
    default:
      return state;
  }
};
export default reducer;
