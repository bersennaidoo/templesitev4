import React, { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import { Event } from "./domain/models/eventModel";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import EventScript from "./pages/EventScript";
import EventAddScript from "./pages/EventAddScript";
import EventDeleteScript from "./pages/EventDeleteScript";
import AuthLayout from "./components/auth/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/events" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path=":id" element={<EventScript />} />
      </Route>
      <Route path="/events/auth" element={<AuthLayout />}>
        <Route path="add" element={<EventAddScript />} />
        <Route path="delete/:id" element={<EventDeleteScript />} />
      </Route>
    </Routes>
  );
}

export default App;
