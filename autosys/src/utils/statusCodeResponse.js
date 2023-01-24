const factoryCodeMessage = (statusCode) => {

    if (statusCode === 200){
        return "SUCCESS";
    }

    if (statusCode >= 400 && statusCode <= 500){
        return "WARNING";
    }

    return "ERROR";

}

export {factoryCodeMessage};