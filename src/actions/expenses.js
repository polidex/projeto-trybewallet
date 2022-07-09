import { TYPE_EXPENSES, FETCH_EXPENSES_ERR } from '.';

const saveExchangeRates = (param) => ({
  type: TYPE_EXPENSES,
  payload: param,
});

const fetchExpensesError = (param) => ({
  type: FETCH_EXPENSES_ERR,
  payload: param,
});

const getUpdatedCurrencies = (state) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => {
      dispatch(saveExchangeRates({ ...state,
        exchangeRates: data,
      }));
    }).catch((err) => {
      dispatch(fetchExpensesError(err));
    });
};

export default getUpdatedCurrencies;
