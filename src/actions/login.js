import LOGIN from '.';

const saveEmail = (email) => ({
  type: LOGIN,
  payload: email,
});

export default saveEmail;
