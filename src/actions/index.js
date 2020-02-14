const LOGIN = username => {
return  {
    type: 'LOGIN',
    username,
  }
}

const LOGOUT = () => ({
  type: 'LOGOUT',
})

const SET_PACKAGES = packages => ({
  type: 'SET_PACKAGES',
  packages,
})

export { LOGIN, LOGOUT, SET_PACKAGES };