// src/components/HRDashboard.js
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const HRDashboard = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <h2>HR Dashboard</h2>
            <h3>Submitted Data</h3>
            {data.length === 0 ? (
                <p>No data submitted yet.</p>
            ) : (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <strong>Review:</strong> {item.review} <br />
                            <strong>Date:</strong> {item.date.toString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HRDashboard;
