import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPresenter = (props: any) => {
  const { login } = props
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <div>
      <h1>Login Page</h1>

      <p>You need to log in. (hint: try fred/password)</p>

      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />

      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <br />
      <button onClick={() => login(username, password)}>Login</button>
      <button onClick={() => navigate("/events")}>Back</button>
    </div>
  )
}

export default LoginPresenter
