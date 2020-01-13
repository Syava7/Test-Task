const SET_USERS = 'SET_USERS'

const initialState = {
  users: [],
  page: 3,
  usersLimit: 5,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_USERS:
    return {  }

  default:
    return state
  }
}

export default usersReducer