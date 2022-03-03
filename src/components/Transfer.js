import TransferForm from "./TransferForm";

const Transfer = ({ accounts, currentAccount, onTransfer }) => {
  return (
    <div className="transaction-container">
      <TransferForm
        accounts={accounts}
        currentAccount={currentAccount}
        onTransfer={onTransfer}
      />
    </div>
  );
};

export default Transfer;
