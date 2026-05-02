import "./Home.style.css";
import { AddedExpensesData } from "../../Components/AddedExpensesData/AddedExpensesData.component";
import { AddExpenses } from "../../Components/AddExpenses/AddExpenses.component";
import { DisplayMoneyCard } from "../../Components/DisplayMoneyCard/DisplayMoneyCard.component";
import { Heading } from "../../Components/Heading/Heading.component";
import { FaWallet, FaArrowDown, FaMoneyBill } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Image } from "../../Components/ImageComponent/Image.component";
import { useLocation, useNavigate } from "react-router-dom";
import { getExpenses } from "../../Services/Expensestracker";

export const HomePage = () => {
  const [expenses, setExpenses] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const userDetails = location.state;

  useEffect(() => {
    if (!userDetails) {
      navigate("/");
    }
  }, []);

  const user_id = userDetails.id;
  const name = userDetails.name;
  const salary = userDetails.salary;

  useEffect(() => {
    if (!user_id) return;

    const fetchData = async () => {
      const data = await getExpenses(user_id);
      setExpenses(data.expenses || []);
    };

    fetchData();
  }, [user_id]);

  const refreshExpenses = async () => {
    try {
      const data = await getExpenses(user_id);
      setExpenses(data.expenses || []);
    } catch (err) {
      console.error(err);
    }
  };
  // const addExpense = (newExpense) => {
  //   setExpenses((prev) => [...prev, newExpense]);
  // };

  const totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  const balance = Number(salary) - totalExpenses;

  return (
    <>
      <div className="Home-Container">
        <div className="user-name">
          <Heading
            heading={
              <>
                Hello <Image /> {name},
              </>
            }
          />
        </div>
        <div className="Home-header">
          <DisplayMoneyCard
            title="Salary"
            amount={salary}
            icon={<FaWallet />}
            type="salary"
          />
          <DisplayMoneyCard
            title="Expenses"
            amount={totalExpenses}
            icon={<FaArrowDown />}
            type="expense"
          />
          <DisplayMoneyCard
            title="Balance"
            amount={balance}
            icon={<FaMoneyBill />}
            type="balance"
          />
        </div>

        <div className="Home-middle">
          <AddedExpensesData expenses={expenses} />
        </div>

        <div className="Home-footer">
          <AddExpenses addDataDB={refreshExpenses} user_id={user_id} />
        </div>
      </div>
    </>
  );
};
