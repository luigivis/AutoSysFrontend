const getPathLoginByForm = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + "/api/v1/security/auth";
}
const getPathLoginByToken = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + "/api/v1/security/tokenValid";
}
const getPathLogOut = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + "/api/v1/security/logout";
}
const getPathUser =() => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + "/api/v1/users/";
}

export {getPathLoginByForm, getPathLoginByToken, getPathLogOut, getPathUser};
