import axios from 'axios'


const SET_USERS = 'SET_USERS'
const IS_LOADING = 'IS_LOADING'

const initialState = {
  users: [],
  isLoading: false,
  currentPage: 1,
  usersPerPage: 5
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { 
        ...state,
        users: action.users
      }
    case IS_LOADING:
      return { 
        ...state,
        isLoading: action.isLoading 
      }
    default:
      return state
    }
}

const setUsers = (users) => ({type: SET_USERS, users})
const toogleIsLoadind = (isLoading) => ({type: IS_LOADING, isLoading})

export const getUsers = () => async (dispatch) => {
  dispatch(toogleIsLoadind(true))
  const response = await axios.get('http://localhost:3000/users')
  dispatch(setUsers(response.data))
  dispatch(toogleIsLoadind(false))
}




export default usersReducer


