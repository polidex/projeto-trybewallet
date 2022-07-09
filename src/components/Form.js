import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrencies from '../actions/currencies';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrenciesFetch } = this.props;
    getCurrenciesFetch();
  }

  render() {
    const {
      wallet: { currencies },
      value,
      description,
      currency,
      method,
      tag,
      onInputChange,
      onInputClick,
    } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="value-input"
          name="value"
          value={ value }
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="description-input"
          name="description"
          value={ description }
          onChange={ onInputChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ onInputChange }
          >
            { currencies.map((currencyOption) => (
              <option
                key={ currencyOption }
                value={ currencyOption }
              >
                { currencyOption }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Escolha um metodo de pagamento:
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Escolha uma tag:
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ onInputClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFetch: () => dispatch(getCurrencies()),
});

Form.propTypes = {
  getCurrenciesFetch: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputClick: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
