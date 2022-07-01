import LOGIN from '.';

const loginWallet = (email) => ({
  type: LOGIN,
  payload: email,
});

export default loginWallet;
