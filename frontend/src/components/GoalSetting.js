import React, { useState } from 'react';
import axios from 'axios';

const GoalSetting = () => {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation for future date
    if (new Date(dueDate) <= new Date()) {
      setMessage('Due date must be in the future.');
      return;
    }

    setLoading(true);
    setMessage(''); // Reset message

    try {
      await axios.post('http://localhost:5000/api/goals', { description, dueDate });
      setMessage('Goal set successfully!');
      // Clear inputs after successful submission
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error setting goal:', error);
      setMessage('Error setting goal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Set a New Goal</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Setting Goal...' : 'Set Goal'}
        </button>
      </form>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default GoalSetting;
