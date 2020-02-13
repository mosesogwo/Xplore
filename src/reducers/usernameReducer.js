const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
};

export default usernameReducer;