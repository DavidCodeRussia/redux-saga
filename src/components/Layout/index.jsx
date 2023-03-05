import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOCATION_CHANGED } from '../../redux/constants';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const pathname = location?.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOCATION_CHANGED, pathname });
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
