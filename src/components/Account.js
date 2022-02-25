const Account = ({ account }) => {
  return (
    <div className="account">
      <h3>{account.name}</h3>
      <h3>Account Number:</h3>
      <h4>{account.accountNumber}</h4>
      <h3>Balance: ${account.balance}</h3>
      <h3>{account.password}</h3>
    </div>
  );
};

export default Account;
