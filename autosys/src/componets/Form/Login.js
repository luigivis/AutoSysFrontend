import {useState} from 'react';
import {loginFields} from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "../Inputs/Input";
import { sendPostLogin } from "../../utils/commonFetch"
import {getPathLoginByForm} from "../../utils/endpointCatalog"

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {

    const [loginState, setLoginState] = useState(fieldsState);
    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        await e.preventDefault();
        sendPostLogin(getPathLoginByForm(), loginState, "", e.nativeEvent.target[2].checked);
    }
    return (<form className="mt-8 space-y-6" onSubmit={handleSubmit}>

        <div className="-space-y-px">
            {fields.map(field => <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
            />)}
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

    </form>)
}
