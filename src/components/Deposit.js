import React from "react";
import Button from "./Button";
import DepositForm from "./DepositForm";

const Deposit = ({ accounts, onDeposit }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>Deposit</h1>
        <DepositForm onDeposit={onDeposit} account={accounts} />
        {/* <Button
          color="steelblue"
          text="Deposit"
          onDeposit={onDeposit}
          accounts={accounts}
        /> */}
      </header>
    </div>
  );
};

export default Deposit;
