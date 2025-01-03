import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPresenter = (props: any) => {
  const { login } = props;
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="container bg-secondary-200 c-message mt-5 mb-5">
      <h1 className="text-center mt-3" style={{fontFamily: "cursive"}}>Login Page</h1>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(evt) => setUsername(evt.target.value)}
              className="form-control bg-primary-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              className="form-control bg-primary-200"
            />
          </div>
        </div>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <button
                className="btn btn-secondary btn-lg me-3"
                onClick={() => login(username, password)}
              >
                Login
              </button>
              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate("/events")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPresenter;
