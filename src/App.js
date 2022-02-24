import { useState } from "react";
import Deposit from "./components/Deposit";
import Accounts from "./components/Accounts";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      name: "Bruce Wayne",
      accountNumber: 100055,
      balance: 900000,
    },
  ]);

  //Deposit
  const depositAmount = (accountNumber) => {
    console.log("deposit", accountNumber);
  };

  return (
    <div className="wrapper">
      <Accounts accounts={accounts} />
      <Deposit accounts={accounts} onDeposit={depositAmount} />
    </div>
  );
};

export default App;
