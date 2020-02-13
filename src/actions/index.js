const LOGIN = username => {
return  {
    type: 'LOGIN',
    username,
  }
}

const LOGOUT = () => ({
  type: 'LOGOUT',
})

export { LOGIN, LOGOUT };