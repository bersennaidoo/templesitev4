import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./LoginPresenter";
import { useContext } from "react";
import axios from "axios";
import SecurityCheckScript from "./SecurityCheckScript";

type AuthLayoutProps = {};

const AuthLayout: FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  return (
      <SecurityCheckScript />
  );
};

export default AuthLayout;
