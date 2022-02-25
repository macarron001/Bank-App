import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";
import DepositForm from "./components/DepositForm";
import Withdraw from "./components/Withdraw";
import SignUp from "./components/SignUp";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Test Account 1",
      accountNumber: 100055,
      balance: 9000,
    },
  ]);

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
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
