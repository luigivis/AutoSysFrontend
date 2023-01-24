import axios from "axios";
import Alerts from "../componets/Notification/Alerts";
import {factoryCodeMessage} from "./statusCodeResponse"

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
        return JSON.stringify(res.data);
    } catch (error) {

        try{
            await Alerts(factoryCodeMessage(error.response.data.status.code), error.response.data.status.description);
            return JSON.stringify(error.response.data);
        }catch (error){
            await Alerts(factoryCodeMessage(6000), "ERROR COULDN'T CONNECT TO SERVER");
            return JSON.stringify({ status : { code: 6000, description: "ERROR COULDN'T CONNECT TO SERVER" }});
        }

    }

}

export {sendPost};
