import { FETCH_SUCCESS, FETCH_ERR } from '.';

const saveCurrencies = (param) => ({
  type: FETCH_SUCCESS,
  payload: param,
});

const fetchError = (param) => ({
  type: FETCH_ERR,
  payload: param,
});

const getCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => {
      const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(saveCurrencies(currencies));
    }).catch((err) => {
      dispatch(fetchError(err));
    });
};

export default getCurrencies;
