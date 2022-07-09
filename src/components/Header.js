import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">
          {expenses.reduce((acc, { value, currency, exchangeRates }) => {
            acc += (value) * (exchangeRates[currency].ask);
            return acc;
          }, 0).toFixed(2) }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
