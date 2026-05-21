import "./DisplayMoneyCard.style.css";

export const DisplayMoneyCard = ({ title, icon, amount, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card-details">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
      </div>
      <div className="amount">{amount}</div>
    </div>
  );
};

export const DisplayIncomeCard = ({ title, icon, value, onchange, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card-details">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
      </div>
      <div className="inputIncome">
        <input type="number" placeholder="-----" value={value} onChange={onchange}/>
      </div>
    </div>
  );
};
