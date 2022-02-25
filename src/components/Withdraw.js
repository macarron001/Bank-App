import WithdrawForm from "./WithdrawForm";

const Withdraw = ({ accounts, onWithdraw }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>Withdraw</h1>
        <WithdrawForm onWithdraw={onWithdraw} account={accounts} />
      </header>
    </div>
  );
};

export default Withdraw;
