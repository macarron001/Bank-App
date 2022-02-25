import { useState } from "react";
import Button from "./Button";

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onSignUp({ name, username, password, initialDeposit });

    setName("");
    setUsername("");
    setPassword("");
    setInitialDeposit("");
  };

  return (
    <div className="sign-container">
      <header className="sign-header">
        <h1>Create Account</h1>
      </header>
      <form className="sign-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Initial Deposit</label>
          <input
            type="text"
            className="form-control"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
        </div>
        <Button color="green" text="Sign Up Now" onSignUp={onSignUp} />
      </form>
    </div>
  );
};

export default SignUp;
