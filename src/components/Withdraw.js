import WithdrawForm from "./WithdrawForm";

const Withdraw = ({ accounts, onWithdraw }) => {
  return (
    <div className="transaction-container">
      <WithdrawForm onWithdraw={onWithdraw} account={accounts} />
    </div>
  );
};

export default Withdraw;
