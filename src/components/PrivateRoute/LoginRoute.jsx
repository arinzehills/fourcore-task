import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginRoute = ({children}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }
  return <Outlet />
};

export default LoginRoute;
