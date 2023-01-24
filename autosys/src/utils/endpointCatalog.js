const getPathLoginByForm = () => {
  console.log(process.env.SERVER_INSTANCE)
  return "http://"+process.env.REACT_APP_SERVER_INSTANCE+":4001/api/v1/security/auth";
}

export {getPathLoginByForm};
