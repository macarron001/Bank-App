import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";
import DepositForm from "./components/DepositForm";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      name: "Bruce Wayne",
      accountNumber: 100055,
      balance: 900000,
    },
  ]);

  //Deposit
  const depositAmount = (account) => {
    // accounts.filter((account) => console.log(account.accountNumber));
    setAccounts(
      accounts.map((account) =>
        account.accountNumber === 100055
          ? { ...account, balance: account.balance + 1000 }
          : account
      )
    );
  };

  return (
    <div className="wrapper">
      <Accounts accounts={accounts} />
      <Deposit accounts={accounts} onDeposit={depositAmount} />
    </div>
  );
};

export default App;
