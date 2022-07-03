import { FETCH_SUCCESS } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      currencies: [...action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
