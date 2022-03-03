import { useState } from "react";

const TransferForm = ({ accounts, currentAccount, onTransfer }) => {
  const [value, setValue] = useState("default");
  const [amount, setAmount] = useState("");

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Please enter an amount");
      return;
    }

    if (
      currentAccount.balance <= 0 ||
      currentAccount.balance < parseInt(amount)
    ) {
      alert("Insufficient funds");
      return;
    }

    let selectValue = document.querySelector("select").value;
    onTransfer(parseInt(amount), selectValue);

    setAmount("");
    setValue("default");
  };

  const stopSyntheticEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <form className="transfer-form" onSubmit={handleSubmit}>
      <div className="transfer-to" onClick={stopSyntheticEvent}>
        <label>Transfer To:</label>
        <select defaultValue={value} onChange={handleSelectChange}>
          <option value="default" disabled hidden>
            Choose here
          </option>
          {accounts
            .filter((account) => account.id !== currentAccount.id)
            .map((account) => (
              <option
                key={account.id}
                value={account.id}
              >{`${account.firstName} ${account.lastName}`}</option>
            ))}
        </select>
      </div>
      <div className="transfer-amount">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
        />
      </div>
      <button className="btn-withdraw">Transfer</button>
    </form>
  );
};

export default TransferForm;
