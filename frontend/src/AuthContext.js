import React, { createContext, useState, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
