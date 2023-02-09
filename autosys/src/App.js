import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import LoginPage from "./pages/Login/Login"
import { Toaster } from "react-hot-toast";
import { setupTimers } from "./utils/logOutAutomatically"
import { searchToken }  from "./utils/onLoadSearchToken";
import Dashboard from  "./pages/Dashboard/Dashboard";

const wrapper = async () =>{
    await searchToken();
    await setupTimers();
}

function App() {
    return (
        <div onLoad={wrapper}>
            <Toaster/>
            <div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/Dashboard/*" element={<Dashboard/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
