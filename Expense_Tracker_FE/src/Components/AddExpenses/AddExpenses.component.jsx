import { AddNewExpensesPopup } from "../AddNewExpensesPopup/AddNewExpenses.component";
import { ButtonIcon } from "../Button/Button.component";
import "./AddExpenses.style.css";
import { useState } from "react";

export const AddExpenses = ({ addDataDB, user_id }) => {
  const [addNewExpPopup, setAddNewExpPopup] = useState(false);

  const OpenPopup = () => {
    setAddNewExpPopup(true);
  };

  const ClosePopup = () => {
    setAddNewExpPopup(false);
  };

  return (
    <>
      <div className="add-expense">
        <h2>Add New Expense</h2>
        <ButtonIcon BtnIcon="+" clickFunc={OpenPopup} />
      </div>
      {addNewExpPopup && (
        <AddNewExpensesPopup
          closeFunc={ClosePopup}
          addDataDB={addDataDB}
          user_id={user_id}
        />
      )}
    </>
  );
};
