import { useNavigate } from "react-router-dom"
import { loginFields } from '../../constants/formFields'
import FormAction from './FormAction'
import FormExtra from './FormExtra'
import Input from '../Inputs/Input'
import { login } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'


const fields = loginFields

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const { data, headers } = await login(getServerPath('security/auth'), {
            username: formData.get("username"),
            password: formData.get("password")
        })

        if (data?.status?.code !== 200) {
            // TODO: Mostrar mensaje de no se pudo logear.
            return
        }

        const { jwt } = headers;

        // Si se seleccionó el remember me, entonces guardar en localStorage
        const rememberMe = formData.get("rememberMe")
        if (rememberMe) {
            window.localStorage.setItem('authToken', jwt);
        }
        else {
            window.sessionStorage.setItem('authToken', jwt);
        }

        navigate('/dashboard');
    }


    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
    )
}
