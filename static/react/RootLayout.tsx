import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import EventListScript from "./pages/EventListScript";
import { Event } from "./domain/models/eventModel";

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <EventListScript />
        </div>
        <main className="col-sm-12 col-md-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
