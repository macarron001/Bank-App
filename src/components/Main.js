import Accounts from "./Accounts";
import Transactions from "./Transactions";

const Main = ({
  accounts,
  currentAccount,
  onDeposit,
  onWithdraw,
  onTransfer,
  onLogout,
}) => {
  return (
    <div className="wrapper-main">
      <div className="details">
        <Accounts
          accounts={accounts}
          currentAccount={currentAccount}
          onLogout={onLogout}
        />
      </div>
      <Transactions
        onDeposit={onDeposit}
        onWithdraw={onWithdraw}
        onTransfer={onTransfer}
        accounts={accounts}
        currentAccount={currentAccount}
      />
    </div>
  );
};

export default Main;
