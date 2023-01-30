import axios from "axios";
import Alerts from "../componets/Notification/Alerts";
import {factoryCodeMessage} from "./statusCodeResponse"

/**
 * Make Post with Axios and Execute Alert
 *
 * @param {string} endpoint The url to make Post
 * @param {string} jsonBody The json data
 * @param {string} token The Token for the server
 *
 * @return {string} Return the JSON
 */
const sendPost = async (endpoint, jsonBody, token) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'JWT': token
        }
    };

    try {
        const res = await axios.post(endpoint, jsonBody, config)
      
        await Alerts(factoryCodeMessage(res.data.status.code), res.data.status.description);
        console.log(res.headers.get("jwt"))
    window.sessionStorage.setItem("sessionAuth",res.headers.get("JWT"));
        return JSON.stringify(res.data);
    } catch (error) {
        getJsonError(error);
    }

}

/**
 * Make Login Post with Axios and Execute Alert
 *
 * @param {string} endpoint The url to make Post
 * @param {string} jsonBody The json data
 * @param {string} token The Token for the server
 * @param {boolean} rememberMe The rememberMe value
 *
 * @return {string} Return the JSON
 */
const sendPostLogin = async (endpoint, jsonBody, token, rememberMe) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'JWT': token
        }
    };

    try {
        const res = await axios.post(endpoint, jsonBody, config)

        await Alerts(factoryCodeMessage(res.data.status.code), res.data.status.description);
        if(rememberMe){
            localStorage.setItem("localAuth",res.headers.get("JWT"));
        }
        window.sessionStorage.setItem("sessionAuth",res.headers.get("JWT"));
        return JSON.stringify(res.data);
    } catch (error) {
        getJsonError(error);
    }


}
/**
 * Make Get with Axios and Execute Alert
 *
 * @param {string} endpoint The url to make Get
 * @param {string} token The Token for the server
 *
 * @return {string} Return the JSON
 */
const sendGet = async (endpoint, token) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'JWT': token
        }
    };
console.log(config);
    try {
        const res = await axios.get(endpoint, config)
        await Alerts(factoryCodeMessage(res.data.status.code), res.data.status.description);
        return JSON.stringify(res.data);
    }
    catch (error) {
        getJsonError(error);
    }

}

/**
 * Make Put with Axios and Execute Alert
 *
 * @param {string} endpoint The url to make Put
 * @param {string} jsonBody The json data
 * @param {string} token The Token for the server
 *
 * @return {string} Return the JSON
 */
const sendPut = async (endpoint, jsonBody, token) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'JWT': token
        }
    };

    try {
        const res = await axios.put(endpoint, jsonBody, config)
        await Alerts(factoryCodeMessage(res.data.status.code), res.data.status.description);
        return JSON.stringify(res.data);
    } catch (error) {
        getJsonError(error);
    }

}

/**
 * Function to interact with error
 *
 * @param {string} error The error response
 *
 * @return {string} Return the JSON
 */
const getJsonError = async (error) => {
    try{
        await Alerts(factoryCodeMessage(error.response.data.status.code), error.response.data.status.description);
        return JSON.stringify(error.response.data);
    }catch (error){
        await Alerts(factoryCodeMessage(6000), "ERROR COULDN'T CONNECT TO SERVER");
        return JSON.stringify({ status : { code: 6000, description: "ERROR COULDN'T CONNECT TO SERVER" }});
    }
}

export {sendPost, sendGet, sendPut, sendPostLogin};
