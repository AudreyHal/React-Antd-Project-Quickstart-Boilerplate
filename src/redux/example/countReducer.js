import { INCREMENT_VALUE, DECREMENT_VALUE } from "./actionTypes";

const initialState = {
  count: 15,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_VALUE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const getCount = (state) => state.example.count;
export default countReducer;
