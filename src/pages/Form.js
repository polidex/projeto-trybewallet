import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="value-input"
          name="valor"
        />
        <input
          type="text"
          data-testid="description-input"
          name="description"
        />
        <label htmlFor="currency">
          Escolha uma moeda:
          <select name="currency" id="currency">
            <option value="brl">BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          Escolha um metodo de pagamento:
          <select
            name="method"
            id="method"
            data-testid="method-input"
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
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
