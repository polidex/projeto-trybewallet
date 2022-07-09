import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getUpdatedCurrencies from '../actions/expenses';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

const initialState = {
  value: '0',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  exchangeRates: {},
};
class Wallet extends React.Component {
  state = {
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { getExpensesFetch } = this.props;
    getExpensesFetch(this.state);
    this.setState(initialState);
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <div>
        <Header />
        <Form
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          onInputChange={ this.handleChange }
          onInputClick={ this.handleClick }
        />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getExpensesFetch: (state) => dispatch(getUpdatedCurrencies(state)),
});

Wallet.propTypes = {
  getExpensesFetch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
