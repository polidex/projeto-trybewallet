import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrencies from '../actions/currencies';

class Form extends React.Component {
  state = {
    value: 0,
    description: '',
    currency: '',
    method: '',
    tag: '',
  }

  componentDidMount() {
    const { getCurrenciesFetch } = this.props;
    getCurrenciesFetch();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="value-input"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="description-input"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
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
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Escolha uma tag:
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        {/* <button
          type="button"
          onClick={ () => console.log(currencies) }
        >
          Teste
        </button> */}
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
