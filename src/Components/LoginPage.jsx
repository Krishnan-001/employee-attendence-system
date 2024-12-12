import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'employee') {
      navigate('/employee');
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-4">Login</h1>
      <select onChange={(e) => setRole(e.target.value)} className="mb-4 p-2 border rounded">
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
