import { useState } from "react";

const SignUp = ({ onSignUp, onLog }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 1;
    const accountNumber = Math.floor(100000 + Math.random() * 9000000000000);

    onSignUp({
      id,
      firstName,
      lastName,
      username,
      password,
      accountNumber,
      balance: parseInt(initialDeposit),
    });

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
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <label>Initial Deposit</label>
          <input
            required
            type="number"
            value={initialDeposit}
            min="500"
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
          <button className="btn-register" type="submit">
            Sign Up
          </button>
          <span className="span-signup">
            <p className="hyperlink-signup">Already have an account?</p>
            <button className="btn-log" onClick={onLog} type="button">
              Log In
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
