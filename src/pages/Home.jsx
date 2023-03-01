
// const token = window.atob(sessionStorage.getItem('token'));

const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(window.atob(currentUser?.password))
  console.log(currentUser?.firstname)
  return (
    <div>{currentUser?.firstname}</div>
  )
}

export default Home