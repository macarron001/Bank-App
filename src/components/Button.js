const Button = ({ color, text, onDeposit, accounts }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
