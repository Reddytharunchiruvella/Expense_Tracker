import { FaMoneyBillWave } from "react-icons/fa";
import "./NewExpenses.style.css";

export const NewExpensesData = ({ curExpData }) => {
  return (
    <>
      <div className="expense-row">
        <div className="expense-left">
          <div className="expense-icon">
            <FaMoneyBillWave />
          </div>
          <div>
            <h4>{curExpData.title}</h4>
            <p>
              {new Date(curExpData.date)
                .toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
                .toLowerCase()
                .replace(",", "")}
            </p>
          </div>
        </div>
        <div className="expense-right">
          <h4>{curExpData.amount}</h4>
        </div>
      </div>
    </>
  );
};
