import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/Login"
import {Toaster} from "react-hot-toast";
import {setupTimers} from "./utils/logOutAutomatically"
import {searchToken} from "./utils/onLoadSearchToken";

const wrapper =() =>{
    searchToken();
    setupTimers();
}

function App() {
    return (

        <div onLoad={wrapper}  className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Toaster/>
            <div className="max-w-md w-full space-y-8">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
