import { useState } from "react";
import Button from "./Button";

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onLogin({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container-login">
      <header className="header">
        <h1>Log-In</h1>
        <form className="form" onSubmit={onSubmit}>
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
          <Button color="steelblue" text="Log-In" onLogin={onLogin} />
        </form>
      </header>
    </div>
  );
};

export default LogIn;
