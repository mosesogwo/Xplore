const packagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PACKAGES':
      return action.packages;
    default:
      return state;
  }
};

export default packagesReducer;
