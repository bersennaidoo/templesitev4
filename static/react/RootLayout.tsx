import React from "react"
import { Outlet } from 'react-router-dom';

import Overview from './components/Overview';

function RootLayout() {
  return (
    <>
      <Overview />
      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
