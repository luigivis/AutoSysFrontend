const getPathLoginByForm = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4000/api/v1/security/auth";
}
const getPathLoginByToken = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4000/api/v1/security/tokenValid";
}

export {getPathLoginByForm, getPathLoginByToken};
