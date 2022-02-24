import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";
import DepositForm from "./components/DepositForm";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Test Account 1",
      accountNumber: 100055,
      balance: 900000,
    },
  ]);

  //Deposit
  const depositAmount = (account) => {
    console.log(account.amount);
    setAccounts(
      accounts.map((account) =>
        account.id === 1
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
