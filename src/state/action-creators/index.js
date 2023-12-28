export const depositMoney = (amount) => {
    return (dispatch) => {
      console.log('Dispatching DEPOSIT action with amount:', amount);
      dispatch({
        type: 'DEPOSIT',
        payload: amount,
      });
    };
  };
  
  
  export const withdrawMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: 'WITHDRAW',
        payload: amount,
      });
    };
  };
  