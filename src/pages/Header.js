import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">0</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
