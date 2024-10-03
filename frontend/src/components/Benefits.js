// Benefits.js
import React from 'react';

const Benefits = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h3>Benefits Administration</h3>
            <p>Manage your health insurance, retirement plans, and wellness programs here.</p>
            <h4>Your Available Benefits:</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>✅ Health Insurance</li>
                <li>✅ Retirement Plans</li>
                <li>✅ Wellness Programs</li>
                <li>✅ Paid Time Off</li>
                <li>✅ Employee Assistance Programs</li>
            </ul>
            {/* Add additional features or components for benefits management */}
            <p style={{ marginTop: '20px' }}>To make changes or enroll, please select an option from the menu above.</p>
        </div>
    );
};

export default Benefits;
