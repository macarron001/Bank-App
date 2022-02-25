import Button from "./Button";

const SignUp = () => {
  return (
    <div className="sign-container">
      <header className="sign-wrapper">
        <h1>Create Account</h1>
        <form className="sign-form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
        </form>
        <Button color="green" text="Sign Up Now" />
      </header>
    </div>
  );
};

export default SignUp;
