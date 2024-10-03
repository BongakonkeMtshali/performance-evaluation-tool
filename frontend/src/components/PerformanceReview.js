import React, { useState } from 'react';

const PerformanceReview = () => {
    const [selfAssessment, setSelfAssessment] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle performance review submission
        console.log('Self-assessment:', selfAssessment);
        console.log('Feedback:', feedback);
        
        // You can add logic here to send the data to your server if needed
    };

    return (
        <div>
            <h3>Performance Review</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Self-Assessment:</label>
                    <textarea
                        value={selfAssessment}
                        onChange={(e) => setSelfAssessment(e.target.value)}
                        required
                        rows="4"
                        cols="50"
                    />
                </div>
                <div>
                    <label>Feedback from HR:</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        rows="4"
                        cols="50"
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default PerformanceReview;
