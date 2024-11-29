import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';

function App() {
  return (
    <Router>
      <div>
        <h1>RBAC UI</h1>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;