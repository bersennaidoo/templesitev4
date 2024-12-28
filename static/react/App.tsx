import React, { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import { Event } from "./domain/models/eventModel";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/events',
    element: <RootLayout />,
    children: [
      { path: "/events", element: <HomePage /> },
    ],
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </> 
  );
}

export default App;
