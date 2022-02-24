import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Name is required");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control" id="success">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
        <FontAwesomeIcon icon={faCircleExclamation} className="icon2" />
        <small>Error!</small>
      </div>

      <div className="form-control" id="error">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
        <FontAwesomeIcon icon={faCircleExclamation} className="icon2" />
        <small>Error!</small>
      </div>

      <div className="form-control">
        <label>Account Number</label>
        <input
          type="text"
          placeholder="000000"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        ></input>
        <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
        <FontAwesomeIcon icon={faCircleExclamation} className="icon2" />
        <small>Error!</small>
      </div>

      <div className="form-control">
        <label>Balance</label>
        <input
          type="text"
          placeholder="$0"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        ></input>
        <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
        <FontAwesomeIcon icon={faCircleExclamation} className="icon2" />
        <small>Error!</small>
      </div>
      <Button text="Create an Account" />
    </form>
  );
};

export default Form;
