import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "./pages/Login/Login"
import { Toaster } from "react-hot-toast";
import { setupTimers } from "./utils/logOutAutomatically"
import { searchToken }  from "./utils/onLoadSearchToken";
import Dashboard from  "./pages/Dashboard/Dashboard";
import Dashboard_User from  "./pages/Dashboard/Dashboard_User/Dashboard_User";



const wrapper =() =>{
    searchToken();
    setupTimers();

}

function App() {
    return (

        <div onLoad={wrapper}>

            <Toaster/>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/Dashboard" element={<Dashboard/>}/>
                        <Route path="/users" element={<Dashboard_User/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
