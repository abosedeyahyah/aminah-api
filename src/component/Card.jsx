import React from 'react'
const Card = ({ user }) => {
  return (
    <>
         <div  >
            <h2>User Data:</h2>
            <p>Name: {user.first_name} {user.last_name}</p>
             <p>Email: {user.email}</p>
            <img src={user.avatar} alt="User Avatar" /> 
          </div>
          
    </>
  )
}

export default Card
