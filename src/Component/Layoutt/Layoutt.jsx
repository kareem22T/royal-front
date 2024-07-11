import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import { fetchAllCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { getSettings } from '../../features/settingsSlice';

const Layoutt = () => {
  const { isAuthentication } = useAuth();

  const dispatch = useDispatch();

  const location = useLocation();
  
  useEffect(() => {
    if (isAuthentication) {
      dispatch(fetchAllCart());
    }
  }, [dispatch]);

  // List of paths where the Navbar should be hidden
  const noNavbarPaths = ['/login', '/register'];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Outlet />


      <Footer />
    </>
  );
};

export default Layoutt;
