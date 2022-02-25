import { useState } from "react";
import Button from "./Button";

const WithdrawForm = ({ accounts, onWithdraw }) => {
  const [amount, setAmount] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Please enter an amount");
      return;
    }

    onWithdraw({ amount });

    setAmount("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Amount</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        color="steelblue"
        text="Withdraw"
        onWithdraw={onWithdraw}
        accounts={accounts}
      />
    </form>
  );
};

export default WithdrawForm;
