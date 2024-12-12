import React from 'react'; // Step 1: Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Step 2: Import routing components

// Step 3: Import local components
import LoginPage from './Components/LoginPage';
import AdminDashboard from './Components/AdminDashboard';
import EmployeeDashboard from './Components/EmployeeDashboard';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App; // Export the App component
