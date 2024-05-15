import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import Protected from './Protected';
import Authentication from './Authentication';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoursePage from '../pages/CoursePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    ),
  },
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <CoursePage />
        <Footer />
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <Signup />,
  },
]);

export default router;
