import { useState } from "react";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const Transactions = ({
  onDeposit,
  onWithdraw,
  onTransfer,
  accounts,
  currentAccount,
}) => {
  const forms = {
    Deposit: <Deposit onDeposit={onDeposit} />,
    Withdraw: <Withdraw onWithdraw={onWithdraw} />,
    Transfer: (
      <Transfer
        accounts={accounts}
        currentAccount={currentAccount}
        onTransfer={onTransfer}
      />
    ),
  };
  const [currentForm, setCurrentForm] = useState("Deposit");

  const handleClick = (e) => {
    setCurrentForm(e.target.text);
  };

  return (
    <div className="transactions">
      <div className="transactions-container">
        <div className="transactions-navbar">
          <a
            // className="active"
            href="#deposit"
            value="Deposit"
            onClick={handleClick}
          >
            Deposit
          </a>
          <a href="#withdraw" value="Withdraw" onClick={handleClick}>
            Withdraw
          </a>
          <a href="#transfer" value="Transfer" onClick={handleClick}>
            Transfer
          </a>
        </div>
        <div className="transactions-feature">{forms[currentForm]}</div>
      </div>
    </div>
  );
};

export default Transactions;
