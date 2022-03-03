import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onLogin({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="wrapper">
      <div className="container-login">
        <header className="header-login">
          <h1>Log-In</h1>
        </header>
        <form className="form-login" onSubmit={onSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login" onClick={onLogin}>
            Log In
          </button>
          <span className="span-login">
            <p className="hyperlink-login">Don't have an account yet?</p>
            <button className="btn-signup" onClick={onRegister}>
              Sign Up
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
