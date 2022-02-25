import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";
import DepositForm from "./components/DepositForm";
import Withdraw from "./components/Withdraw";
import SignUp from "./components/SignUp";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      id: "",
      name: "",
      username: "",
      password: "",
      accountNumber: "",
      balance: "",
    },
  ]);

  //Add Account
  const addAccount = (account) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    let initialDeposit = account.initialDeposit;
    let depositAmount = parseInt(initialDeposit);
    const newAccount = { id, ...account };
    newAccount.accountNumber = Math.floor(100000 + Math.random() * 900000);
    newAccount.balance = depositAmount;
    setAccounts([...accounts, newAccount]);
  };

  //Deposit
  const depositAmount = (account) => {
    console.log(account.amount);
    let depositAmount = account.amount;
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id === 1) {
        account.balance = account.balance + parseInt(depositAmount);
      }
      return account;
    });
    setAccounts(mutatedAccounts);
  };

  //Withdraw
  const withdrawAmount = (account) => {
    console.log(account.amount);
    let depositAmount = account.amount;
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id === 1) {
        account.balance = account.balance - parseInt(depositAmount);
      }
      return account;
    });
    setAccounts(mutatedAccounts);
  };

  return (
    <div className="wrapper">
      <Accounts accounts={accounts} />
      <Deposit onDeposit={depositAmount} />
      <Withdraw onWithdraw={withdrawAmount} />
      <SignUp onSignUp={addAccount} />
    </div>
  );
};

export default App;
