import React from 'react';
import Form from './Form';
import Header from './Header';
import Table from './Table';

class Wallet extends React.Component {
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

export default Wallet;
