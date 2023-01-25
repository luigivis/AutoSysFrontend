const getPathLoginByForm = () => {
  return "http://" + process.env.REACT_APP_IP_ADDRESS + ":4001/api/v1/security/auth";
}

export default getPathLoginByForm;
