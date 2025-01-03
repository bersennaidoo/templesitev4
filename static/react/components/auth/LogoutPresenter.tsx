import React, { FC } from "react"
const LogoutPresenter = (props: any) => {
  const { logout } = props

  return <button onClick={logout}>Logout</button>
}

export default LogoutPresenter
