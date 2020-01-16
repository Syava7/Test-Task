import React from 'react'


const UsersPage = ({users, isLoading}) => {
  if (isLoading) {
    return <h5>Loading...</h5>
  }
  return (
    <ul className='list-group mb-4'>
      {
        users.map(user => (
          <li key={user.id} className='list-group-item'>
            <div>{user.name} {user.surname}</div>
            <div>{user.desc}</div>
          </li>
        ))
      }
    </ul>
  )
}


export default UsersPage
