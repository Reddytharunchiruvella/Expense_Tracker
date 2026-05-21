import { useEffect, useState } from "react";
import { Heading } from "../Heading/Heading.component";
import "./AddedExpensesData.style.css";
import { NewExpensesData } from "../NewExpensesData/NewExpenses.component";

export const AddedExpensesData = ({ expenses }) => {
  return (
    <>
      <div className="Expdata-container">
        <Heading heading="All Expenses" />
        {expenses && expenses.length > 0 ? (
          expenses.map((curExp) => (
            <NewExpensesData curExpData={curExp} />
          ))
        ) : (
          <p>No Expenses Found</p>
        )}
      </div>
    </>
  );
};
