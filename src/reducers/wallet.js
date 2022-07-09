import { FETCH_SUCCESS, TYPE_EXPENSES, DELETE_EXPENSE } from '../actions';

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
  case TYPE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
