import React from 'react'

const Home = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("user"))
  console.log(currentUser.firstname)
  return (
    <div>{currentUser.firstname}</div>
  )
}

export default Home