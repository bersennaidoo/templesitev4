import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./components/auth/LoginPresenter";
import { useContext } from "react";
import axios from "axios";
import SecurityCheckScript from "./components/auth/SecurityCheckScript";

type AuthLayoutProps = {};

const AuthLayout: FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  return (
      <SecurityCheckScript />
  );
};

export default AuthLayout;
