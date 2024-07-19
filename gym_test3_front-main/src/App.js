import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from "./components/Login";
import ProfilePage from "./components/Profile";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:id_cl" element={<ProfilePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
