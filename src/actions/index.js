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

const SET_WISHLIST = wishlist => ({
  type: 'SET_WISHLIST',
  wishlist,
})

export { LOGIN, LOGOUT, SET_PACKAGES, SET_WISHLIST };