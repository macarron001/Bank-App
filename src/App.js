import { useState } from "react";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      firstName: "Henry",
      lastName: "Baker",
      username: "henry",
      password: "baker",
      accountNumber: 6024587954263,
      balance: 500,
    },
    {
      id: 2,
      firstName: "Vince",
      lastName: "Neri",
      username: "vince",
      password: "neri",
      accountNumber: 3094489322263,
      balance: 700,
    },
  ]);

  const [currentAccount, setCurrentAccount] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  //Register
  const onRegister = () => {
    setIsRegistered(false);
  };

  const onLog = () => {
    setIsRegistered(true);
  };

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
    setCurrentAccount(currentAccount);
    setIsLoggedIn(true);
  };

  //Add Account
  const addAccount = (account) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    let initialDeposit = account.initialDeposit;
    let depositAmount = parseInt(initialDeposit);
    const newAccount = { id, ...account };
    newAccount.accountNumber = Math.floor(
      100000 + Math.random() * 9000000000000
    );
    newAccount.balance = depositAmount;
    setAccounts([...accounts, newAccount]);
    setIsRegistered(true);
  };

  //Deposit
  const depositAmount = (amount) => {
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id === currentAccount.id) {
        account.balance = account.balance + amount;
      }
      return account;
    });
    console.log("This is deposit");
    setAccounts(mutatedAccounts);
  };

  //Withdraw
  const withdrawAmount = (amount) => {
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id === currentAccount.id) {
        account.balance = account.balance - amount;
      }
      return account;
    });
    console.log("This is withdraw");
    setAccounts(mutatedAccounts);
  };

  //Transfer
  const transferAmount = (amount, receiver) => {
    let copiedAccounts = [...accounts];
    let mutatedAccounts = copiedAccounts.map((account) => {
      if (account.id == currentAccount.id) {
        account.balance = account.balance - amount;
      }
      if (account.id == receiver) {
        account.balance = account.balance + amount;
      }
      return account;
    });
    setAccounts(mutatedAccounts);
    console.log(mutatedAccounts);
  };

  return (
    <>
      {!isLoggedIn ? (
        !isRegistered ? (
          <SignUp
            onSignUp={addAccount}
            currentAccount={currentAccount}
            onLog={onLog}
          />
        ) : (
          <LogIn onLogin={logAccount} onRegister={onRegister} />
        )
      ) : (
        <Main
          accounts={accounts}
          currentAccount={currentAccount}
          onDeposit={depositAmount}
          onWithdraw={withdrawAmount}
          onTransfer={transferAmount}
        />
      )}
    </>
  );
};

export default App;
