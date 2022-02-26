import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="container-accounts">
      <div className="header">
        {accounts.map((account) => (
          <Account key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
