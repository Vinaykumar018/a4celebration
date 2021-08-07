// src/components/auth/AuthMiddleware.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthMiddleware = ({ redirectTo = '/login' }) => {
   const isAuthenticated = localStorage.getItem('userId') ? true : false;

  
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default AuthMiddleware;