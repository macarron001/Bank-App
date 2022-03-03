import Account from "./Account";

const Accounts = ({ accounts, currentAccount }) => {
  const accountName = currentAccount.firstName + " " + currentAccount.lastName;
  const accountBalance = currentAccount.balance;

  return (
    <div className="container-account">
      <div className="header-account">
        <h1>Hi {accountName}</h1>
      </div>
      <div className="card-account">
        <div className="card-container">
          <div className="card">
            <div className="card-bank-name">🏦Awesomebank</div>
            <span className="card-type">Debit</span>
            <div className="card-number">5522 4433 1177 8989</div>
            <div className="card-footer">
              <span className="card-name">{accountName}</span>
              <span className="mastercard">mastercard</span>
            </div>
          </div>
        </div>
        <div className="account-number-container">
          <div className="account-number">
            <h1>6024587954263</h1>
            <h3>6024587954263</h3>
          </div>
        </div>
      </div>
      <div className="footer-account">
        <div className="available-balance">
          <p>Available Balance</p>
        </div>
        <div className="balance-amount">
          <span className="php">PHP</span>
          <span className="amount">{accountBalance}</span>
        </div>
      </div>
      {/* <div className="header">
        {accounts.map((account) => (
          <Account key={account.id} account={account} />
        ))}
      </div> */}
    </div>
  );
};

export default Accounts;
