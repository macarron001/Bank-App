import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="container">
      <div className="header">
        {accounts.map((account) => (
          <Account key={account.accountNumber} account={account} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
