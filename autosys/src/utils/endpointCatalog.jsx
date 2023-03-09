const getPathLoginByForm = () => {
  return 'http://' + process.env.REACT_APP_IP_ADDRESS + '/api/v1/security/auth'
}
const getPathLoginByToken = () => {
  return (
    'http://' + process.env.REACT_APP_IP_ADDRESS + '/api/v1/security/tokenValid'
  )
}
const getPathLogOut = () => {
  return (
    'http://' + process.env.REACT_APP_IP_ADDRESS + '/api/v1/security/logout'
  )
}
const getPathUser = () => {
  return 'http://' + process.env.REACT_APP_IP_ADDRESS + '/api/v1/users/?size=100'
}
const getPathUserPost = () => {
  return process.env.REACT_APP_IP_ADDRESS + "users/create";
}
const getPathEmployee = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + "/api/v1/employees/list/";
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
