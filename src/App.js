import { useState } from "react";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Main from "./components/Main";

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

  const onLogout = () => {
    setIsLoggedIn(false);
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
      alert("Not an existing account");
      return;
    }
    currentAccount = currentAccount[0];
    setCurrentAccount(currentAccount);
    setIsLoggedIn(true);
  };

  //Add Account
  const addAccount = (account) => {
    console.log(account);
    let newAccounts = [...accounts, account];
    setAccounts(newAccounts);
    console.log(newAccounts);
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
          onLogout={onLogout}
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
