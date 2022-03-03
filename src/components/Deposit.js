import DepositForm from "./DepositForm";

const Deposit = ({ onDeposit }) => {
  return (
    <div className="transaction-container">
      <DepositForm onDeposit={onDeposit} />
    </div>
  );
};

export default Deposit;
