import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Outlet renders the child route elements
};

export default PrivateRoute;
