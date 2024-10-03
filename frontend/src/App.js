import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext'; // Import the DataProvider
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PerformanceReview from './components/PerformanceReview';
import GoalSetting from './components/GoalSetting';
import Benefits from './components/Benefits'; 
import EnrollBenefits from './components/EnrollBenefits';
import HRDashboard from './components/HRDashboard'; // Import HR Dashboard

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(''); // Manage user role

    const handleLogin = (role) => {
        setIsLoggedIn(true);
        setUserRole(role); // Set the user role upon login
    };

    return (
        <DataProvider>
            <Router>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Performance Evaluation Tool</h1>
                    
                    {isLoggedIn ? (
                        <>
                            <nav>

                                {userRole === 'hr' && ( // Show HR Dashboard link for HR users
                                    <Link to="/hr-dashboard">HR Dashboard</Link>
                                )}
                            </nav>
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/performance-review" element={<PerformanceReview />} />
                                <Route path="/goal-setting" element={<GoalSetting />} />
                                <Route path="/benefits" element={<Benefits />} />
                                <Route path="/enroll-benefits" element={<EnrollBenefits />} />
                                {userRole === 'hr' && ( // Add HR Dashboard route for HR users
                                    <Route path="/hr-dashboard" element={<HRDashboard />} />
                                )}
                            </Routes>
                        </>
                    ) : (
                        <>
                            <p>Welcome! Please register or log in to continue.</p>
                            <p>To create a new account, click on "Register" below.</p>
                            <div>
                                <Link to="/login">
                                    <button style={{ margin: '10px', padding: '10px 20px' }}>Login</button>
                                </Link>
                                <Link to="/register">
                                    <button style={{ margin: '10px', padding: '10px 20px' }}>Register</button>
                                </Link>
                            </div>
                            <Routes>
                                <Route path="/" element={<Navigate to="/login" />} />
                                <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                                <Route path="/register" element={<Register />} />
                            </Routes>
                        </>
                    )}
                </div>
            </Router>
        </DataProvider>
    );
};

export default App;
