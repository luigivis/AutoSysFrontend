import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { setupTimers } from './utils/logOutAutomatically'

import LoginPage from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardUser from './pages/User/User';

import ProtectedRoute from './componets/ProtectedRoute/ProtectedRoute'
import DashboardEmployee from './pages/Employee/Employee'

const wrapper = async () => {
    await setupTimers()
}

function App() {
    console.log(window.location.pathname);
    return (

        <div onLoad={wrapper}>
            <Toaster />
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route
                            path="dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        >
                            <Route path="users" element={
                                <ProtectedRoute>
                                    <DashboardUser />
                                </ProtectedRoute>
                            } />
                            <Route path="employees" element={
                                <ProtectedRoute>
                                    <DashboardEmployee />
                                </ProtectedRoute>
                            } />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
