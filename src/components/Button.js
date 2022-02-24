const Button = ({ color, text, onDeposit, accounts }) => {
  return (
    <button
      className="btn"
      onClick={() => onDeposit(accounts[0])}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
