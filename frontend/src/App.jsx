import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider, useAuth } from './auth';


function App() {
  return (
    <AuthProvider>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <span style={{ margin: '0 10px' }}></span>
            <AuthButton />
          </nav>
        </header>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function AuthButton() {
  const { user, logout } = useAuth();
  return user ? (
    <div>
      <Link to={`/user/${user.id}`}>{user.username}</Link> 
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <Link to="/login">Login</Link>
  );
}

export default App;
