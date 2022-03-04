import { useState } from "react";

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
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login" type="submit">
            Log In
          </button>
          <span className="span-login">
            <p className="hyperlink-login">Don't have an account yet?</p>
            <button className="btn-signup" onClick={onRegister} type="button">
              Sign Up
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
