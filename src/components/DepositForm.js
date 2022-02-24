import { useState } from "react";
import Button from "./Button";

const DepositForm = ({ accounts, onDeposit }) => {
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    onDeposit({ amount });

    setAmount("");
  };

  return (
    <form className="deposit-form" onSubmit={onSubmit}>
      <label>Amount</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        color="steelblue"
        text="Deposit"
        onDeposit={onDeposit}
        accounts={accounts}
      />
    </form>
  );
};

export default DepositForm;
