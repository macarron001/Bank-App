import { useState } from "react";

const DepositForm = ({ accounts, onDeposit }) => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Please enter an amount");
      return;
    }

    onDeposit(parseInt(amount));
    setAmount("");
  };

  const stopSyntheticEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <form className="transaction-form" onSubmit={onSubmit}>
      <label>Amount</label>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        onClick={(onDeposit, stopSyntheticEvent)}
        // onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="btn-deposit"
        color="steelblue"
        text="Deposit"
        accounts={accounts}
        // onClick={onDeposit}
      >
        DEPOSIT
      </button>
    </form>
  );
};

export default DepositForm;
