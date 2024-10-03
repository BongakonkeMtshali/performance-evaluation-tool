import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('User successfully created! You can now log in.'); // Success message
                // Clear inputs after successful registration
                setUsername('');
                setPassword('');

                // Redirect to login page after a brief delay
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Redirect after 2 seconds
            } else {
                setMessage(data.message || 'Error registering user');
            }
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Register</h2>
            <p>Please fill in the form below to create your account.</p>
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
                <button type="submit" style={{ padding: '10px 20px' }}>Register</button>
            </form>
            {message && <p>{message}</p>} {/* Display feedback message */}
            <p>After registering, you will be redirected to the login page.</p>
        </div>
    );
};

export default Register;
