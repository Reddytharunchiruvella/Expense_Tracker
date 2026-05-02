import { useState } from "react";
import { ButtonAdd, ButtonCircle } from "../Button/Button.component";
import { Heading } from "../Heading/Heading.component";
import {
  InputDate,
  InputNum,
  InputText,
} from "../InputComponent/Input.component";
import { Label } from "../Label/Label.component";
import "./AddNewExpenses.style.css";
import { addExpense } from "../../Services/Expensestracker";

export const AddNewExpensesPopup = ({ closeFunc, addDataDB, user_id }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const IsValid = title.trim().length > 0 && Number(amount) > 0 && date !== "";

  const handleSubmit = async () => {
    try {
      await addExpense({
        title,
        amount: Number(amount),
        date,
        user_id,
      });

      addDataDB && addDataDB();
      closeFunc && closeFunc();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <>
      <div className="expense-container">
        <div className="form-expense">
          <div className="form-header">
            <Heading heading="Add New Expense" />
            <ButtonCircle BtnCircle="x " closeFunc={closeFunc} />
          </div>
          <Label label="Title" />
          <InputText
            PHname="Enter expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label label="Amount" />
          <InputNum
            PHname="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Label label="Date" />
          <InputDate value={date} onChange={(e) => setDate(e.target.value)} />
          <ButtonAdd
            BtnName="Add Expense"
            disabled={!IsValid}
            addDataDB={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
