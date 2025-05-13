import React from 'react'

const UserCard = ({name, age, email}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <span>Age: {age}</span>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserCard