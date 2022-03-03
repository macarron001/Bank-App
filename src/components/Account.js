const Account = ({ account }) => {
  return (
    <div className="account">
      <h3>Hi! {account.firstName}</h3>
      <h3>Account Number:</h3>
      <h4>{account.accountNumber}</h4>
      <h3>Balance: ${account.balance}</h3>
    </div>
  );
};

export default Account;
