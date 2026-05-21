import "./Home.style.css";
import { AddedExpensesData } from "../../Components/AddedExpensesData/AddedExpensesData.component";
import { AddExpenses } from "../../Components/AddExpenses/AddExpenses.component";
import {
  DisplayIncomeCard,
  DisplayMoneyCard,
} from "../../Components/DisplayMoneyCard/DisplayMoneyCard.component";
import { Heading } from "../../Components/Heading/Heading.component";
import { FaWallet, FaArrowDown, FaMoneyBill } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Image } from "../../Components/ImageComponent/Image.component";
import { useLocation, useNavigate } from "react-router-dom";
import { getExpenses, saveSalary } from "../../Services/Expensestracker";
import { Toaster, toast } from "react-hot-toast";
import { PNFButton } from "../../Components/Button/Button.component";

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userDetails = location.state;

  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState(userDetails.income || "");

  const user_id = userDetails.id;
  const name = userDetails.name;

  const saveFunc = async () => {
    try {
      await saveSalary({
        user_id,
        income,
      });
      toast.success("saved successfully !!!");
      // navigate("/");
    } catch (error) {
      toast.error("Failed to save Salary");
    }
  };

  useEffect(() => {
    if (!userDetails) {
      toast.error("NO Userdetails!!!");
      // navigate("/");
    }
  }, []);

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

  const income = Number(input) || 0;

  const totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  const balance = income - totalExpenses;

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
          <DisplayIncomeCard
            title="Income"
            value={input}
            onchange={(e) => setInput(e.target.value)}
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

        <div className="Home-save">
          <button className="saveBtn" onClick={saveFunc}>
            Save
          </button>
          <PNFButton BtnName="Back" />
          <Toaster
            toastOptions={{
              className: "",
              style: {
                padding: "20px",
                color: "white",
                background: "black",
              },
              position: "top-center",
            }}
          />
        </div>
      </div>
    </>
  );
};
