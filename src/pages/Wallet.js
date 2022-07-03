import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrencies from '../actions/currencies';
import Form from './Form';
import Header from './Header';
import Table from './Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrenciesFetch } = this.props;
    getCurrenciesFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
        TrybeWallet
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFetch: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  getCurrenciesFetch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
