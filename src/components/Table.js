import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deleteExpense from '../actions/deleteExpense';

class Table extends React.Component {
  handleClick = (item) => {
    const { expenses, dispatchDeleteExpense } = this.props;
    const expenseFilter = expenses.filter(({ currency, exchangeRates }) => (
      exchangeRates[currency].timestamp !== item
    ));
    dispatchDeleteExpense(expenseFilter);
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((
                {
                  description,
                  tag,
                  method,
                  value,
                  currency,
                  exchangeRates,
                },
              ) => (
                <tr key={ exchangeRates[currency].timestamp }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {(value * parseFloat(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => console.log('editar') }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => (
                        this.handleClick(exchangeRates[currency].timestamp)) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (expenseFilter) => dispatch(deleteExpense(expenseFilter)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchDeleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
