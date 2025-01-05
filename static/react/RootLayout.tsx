import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import EventListScript from "./pages/EventListScript";
import { Event } from "./domain/models/eventModel";

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  return (
    <>
        <div
          className="container-fluid hvr-grow page-header py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">
              
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a  className="text-white" href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white"
                  aria-current="page"
                >
                  Events
                </li>
              </ol>
            </nav>
          </div>
        </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-sm-12">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <EventListScript />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
