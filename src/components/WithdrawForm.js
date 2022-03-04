import { useState } from "react";

const WithdrawForm = ({ accounts, onWithdraw }) => {
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

    onWithdraw(parseInt(amount));

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
        onClick={(onWithdraw, stopSyntheticEvent)}
        min={1}
      />
      <button
        className="btn-withdraw"
        color="steelblue"
        text="Withdraw"
        // onClick={onWithdraw}
        accounts={accounts}
      >
        Withdraw
      </button>
    </form>
  );
};

export default WithdrawForm;
