const SET_USERS = 'SET_USERS'

const initialState = {
  users: [],
  currentPage: 1,
  usersPageLimit: 5,
  totalUsersCount: 0
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