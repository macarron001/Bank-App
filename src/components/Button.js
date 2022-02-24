const Button = ({ color, text, onDeposit, accounts }) => {
  return (
    <button
      className="btn"
      onClick={() => onDeposit(accounts)}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
