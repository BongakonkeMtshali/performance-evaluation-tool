import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful!'); // Success message
                
                // Call the handleLogin function and pass the user role
                handleLogin(data.role); // Pass the user role to update the state in App.js
                
                // Redirect to your main app route after successful login
                setTimeout(() => {
                    navigate('/dashboard'); // Change this to your main route
                }, 2000); // Redirect after 2 seconds
            } else {
                setMessage(data.message || 'Invalid credentials');
            }
        } catch (error) {
            setMessage('Error logging in. Please try again.');
        } finally {
            setLoading(false); // Set loading to false regardless of outcome
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <p>Please enter your login details below.</p>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ margin: '10px', padding: '10px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ margin: '10px', padding: '10px' }}
                />
                <button type="submit" style={{ padding: '10px 20px' }} disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {message && <p>{message}</p>} {/* Display feedback message */}
        </div>
    );
};

export default Login;
