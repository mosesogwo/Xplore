const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action.username)
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
};

export default usernameReducer;