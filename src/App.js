import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";
import DepositForm from "./components/DepositForm";
import Withdraw from "./components/Withdraw";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Test Account 1",
      username: "test",
      password: "account",
      accountNumber: 600123,
      balance: 500,
    },
  ]);

  //Log In
  const locateAccount = (currentAccount) => {
    let locatedAccount = accounts.filter((account) => {
      return (
        account.username === currentAccount.username &&
        account.password === currentAccount.password
      );
    });
    return locatedAccount;
  };

  const logAccount = (account) => {
    let currentAccount = locateAccount(account);
    if (currentAccount[0] === undefined) {
      console.log("none");
      return;
    }
    currentAccount = currentAccount[0];
    console.log(currentAccount);
  };

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
    let depositAmount = account.amount;
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id === 1) {
        account.balance = account.balance + parseInt(depositAmount);
      }
      return account;
    });
    console.log(mutatedAccounts);
    setAccounts(mutatedAccounts);
  };

  //Withdraw
  const withdrawAmount = (account) => {
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
      <LogIn onLogin={logAccount} />
    </div>
  );
};

export default App;
