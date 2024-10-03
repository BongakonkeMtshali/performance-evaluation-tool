import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        navigate('/login'); // Redirect to login
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Welcome to the Dashboard</h2>
            <p>You are logged in!</p>
            <div>
                <button onClick={() => navigate('/performance-review')} style={{ padding: '10px 20px', margin: '10px' }}>
                    Performance Review
                </button>
                <button onClick={() => navigate('/goal-setting')} style={{ padding: '10px 20px', margin: '10px' }}>
                    Goal Setting
                </button>
                <button onClick={() => navigate('/benefits')} style={{ padding: '10px 20px', margin: '10px' }}>
                    Benefits Administration
                </button>
                <button onClick={() => navigate('/enroll-benefits')} style={{ padding: '10px 20px', margin: '10px' }}>
                    Enroll in Benefits
                </button>
            </div>
            <button onClick={handleLogout} style={{ padding: '10px 20px', margin: '10px', backgroundColor: 'red', color: 'white' }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
