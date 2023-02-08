const getPathLoginByForm = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4000/api/v1/security/auth";
}
const getPathLoginByToken = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4000/api/v1/security/tokenValid";
}
const getPathLogOut = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4000/api/v1/security/logout";
}

export {getPathLoginByForm, getPathLoginByToken, getPathLogOut};
