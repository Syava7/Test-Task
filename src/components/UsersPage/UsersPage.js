import React from 'react'
import { connect } from 'react-redux'


const UsersPage = ({users, isLoading}) => {
  console.log(users, isLoading)
  return (
    <div>
      Im Users
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading
  }
}


export default connect(mapStateToProps, {})(UsersPage)
