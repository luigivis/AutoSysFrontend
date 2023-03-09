const getPathLoginByForm = () => {
  return process.env.REACT_APP_IP_ADDRESS + 'security/auth'
}
const getPathLoginByToken = () => {
  return (
    process.env.REACT_APP_IP_ADDRESS + 'security/tokenValid'
  )
}
const getPathLogOut = () => {
  return (
    process.env.REACT_APP_IP_ADDRESS + 'security/logout'
  )
}
const getPathUser = () => {
  return process.env.REACT_APP_IP_ADDRESS + 'users/?size=100'
}
const getPathUserPost = () => {
  return process.env.REACT_APP_IP_ADDRESS + "users/create";
}
const getPathEmployee = () => {
  return process.env.REACT_APP_IP_ADDRESS + "employees/list/";
}

const getServerPath = (resource) =>
  `${process.env.REACT_APP_IP_ADDRESS}${resource}`

export {
  getPathLoginByForm,
  getPathLoginByToken,
  getPathLogOut,
  getPathUser,
  getServerPath,
  getPathUserPost,
  getPathEmployee,
}
