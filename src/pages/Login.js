import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveEmail from '../actions/login';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  }

  formValidation = () => {
    const { email, password } = this.state;
    const pwdMin = 6;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = email.match(emailFormat);
    const pwdValidation = password.length >= pwdMin;
    if (emailValidation && pwdValidation) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }),
      this.formValidation);
  }

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveEmail(email));
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <br />
        <input
          type="password"
          name="password"
          value={ password }
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <br />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        {/* <button
          type="button"
          onClick={ () => console.log('oi!') }
        >
          Teste
        </button> */}
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
