import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import EventListScript from "./pages/EventListScript";
import { Event } from "./domain/models/eventModel";

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <EventListScript />
    </>
  );
};

export default RootLayout;
