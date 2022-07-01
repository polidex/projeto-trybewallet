const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const saveWallet = (state = initialState, action) => {
  switch (action.type) {
  // case xablau:
  //   return {
  //     ...state,
  //     wallet: {
  //       currencies: [],
  //       expenses: [],
  //       editor: false,
  //       idToEdit: 0,
  //     },
  //   };
  default:
    return state;
  }
};

export default saveWallet;
