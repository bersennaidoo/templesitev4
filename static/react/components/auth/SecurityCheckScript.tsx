import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useParams, useNavigate } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";

const SecurityCheckScript = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const  params  = useParams()
  const navigate = useNavigate()

  const login = (username: any, password: any) => {
    // Note to engineering team:
    // Maybe make this more secure...
    if (username === "bersen" && password === "bersen") {
      setLoggedIn(true);
    }
  };

  const logout = () =>  {
    setLoggedIn(false)
  }

  return <>{loggedIn ? <Outlet /> : <LoginPresenter login={login} />}</>;
};

export default SecurityCheckScript;
