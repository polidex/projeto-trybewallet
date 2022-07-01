import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="email-field">email do usuario</h1>
      </div>
    );
  }
}

export default connect()(Header);
