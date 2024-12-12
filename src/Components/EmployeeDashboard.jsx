import React, { useState } from 'react';



const EmployeeDashboard = () => {
  const [attendanceStatus, setAttendanceStatus] = useState('');

  const markAttendance = (status) => {
    const timestamp = new Date().toLocaleString();
    setAttendanceStatus(`Your attendance has been marked as: ${status} on ${timestamp}`);
    
    // Here you would typically send this data to your backend.
    console.log(`Marked as ${status} at ${timestamp}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Employee Dashboard</h1>
      <h2 className="text-lg mb-2">Mark Attendance</h2>
      <button onClick={() => markAttendance('Present')} className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
        Present
      </button>
      <button onClick={() => markAttendance('Late')} className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded">
        Late
      </button>
      <button onClick={() => markAttendance('Absent')} className="bg-red-500 text-white px-4 py-2 rounded">
        Absent
      </button>

      {attendanceStatus && (
        <p className="mt-4">{attendanceStatus}</p>
      )}
    </div>
  );
};

export default EmployeeDashboard;
