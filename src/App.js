// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import ApplicationDetails from './components/ApplicationDetails';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <Routes>
        <Route path="/" element={<Table />} />
          <Route path="/:applicationCategory/:applicationNumber" element={<ApplicationDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
