import { useState } from "react";

const SignUp = ({ onSignUp, onLog }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onSignUp({ firstName, lastName, username, password, initialDeposit });

    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setInitialDeposit("");
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <header className="header-signup">
          <h1>Create Account</h1>
        </header>
        <form className="form-signup" onSubmit={onSubmit}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <label>Initial Deposit</label>
          <input
            type="text"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
          <button className="btn-register" onClick={onSignUp}>
            Sign Up
          </button>
          <span className="span-signup">
            <p className="hyperlink-signup">Already have an account?</p>
            <button className="btn-log" onClick={onLog}>
              Log In
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
