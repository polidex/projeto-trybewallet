import { DELETE_EXPENSE } from '.';

const deleteExpense = (param) => ({
  type: DELETE_EXPENSE,
  payload: param,
});

export default deleteExpense;
