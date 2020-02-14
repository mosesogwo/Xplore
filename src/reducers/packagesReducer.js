const packagesReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_PACKAGES':
      console.log(action.packages)
      return action.packages;
    default:
      return state; 
  }
}

export default packagesReducer;