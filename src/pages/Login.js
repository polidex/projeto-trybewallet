import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="E-mail"
          data-testid="email-input"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <br />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
