import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';

import API_BASE_URL from './config';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/api/token-auth/`, { username, password });
    console.log('Login response:', response);
    setUser({ id: response.data.user_id, username: response.data.username, token: response.data.token });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}