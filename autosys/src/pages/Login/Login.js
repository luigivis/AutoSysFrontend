import Header from "../../componets/Header/Header"
import Login from "../../componets/Form/Login";
import Alert from "../../componets/Notification/Alerts";

export default function LoginPage(){
    return(
        <>
            <Header
                heading="Login"
            />

            <Login/>
            <Alert/>
        </>
    )
}