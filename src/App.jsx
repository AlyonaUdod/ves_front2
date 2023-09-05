import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchCurrentUser } from 'redux/auth/authOperations';

import AppLayout from 'components/AppLayout/AppLayout';

import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            path="/"
            element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}