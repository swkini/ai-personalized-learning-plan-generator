import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { role, field, hours } = location.state || {};

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Field of Interest:</strong> {field}</p>
      <p><strong>Available Hours:</strong> {hours} hrs/week</p>

      <div className="plan">
        <h3>AI Generated Plan (Sample)</h3>
        <p>As a <strong>{role}</strong> interested in <strong>{field}</strong> with <strong>{hours}</strong> hours/week, your AI plan includes skill development, assessments, and tasks designed for optimal learning.</p>
      </div>

      <div className="progress">
        <h3>Progress:</h3>
        <p>Task Completion: 0%</p>
        <p>Assessments Taken: 0</p>
      </div>
    </div>
  );
}

export default Dashboard;
