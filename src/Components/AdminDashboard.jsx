import React from 'react';



const AdminDashboard = () => {
  // Sample data for attendance records (this could be fetched from an API)
  const attendanceRecords = [
    { name: 'John Doe', status: 'Present', timestamp: '2024-12-12 09:00 AM' },
    { name: 'Jane Smith', status: 'Late', timestamp: '2024-12-12 09:30 AM' },
    { name: 'Alice Johnson', status: 'Absent', timestamp: '-' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Admin Dashboard</h1>
      <h2 className="text-lg">Attendance Records</h2>
      <ul className="list-disc pl-5">
        {attendanceRecords.map((record, index) => (
          <li key={index}>
            {record.name}: {record.status} at {record.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
