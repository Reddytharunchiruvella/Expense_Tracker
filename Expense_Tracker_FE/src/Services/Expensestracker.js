import axios from "axios";

export const getExpenses = async (user_id) => {
  try {
    const ExpApiRes = await axios.get("http://localhost:5000/api/expenses", {
      params: { user_id },
    });
    const ExpResData = ExpApiRes.data;
    return ExpResData;
  } catch (error) {
    console.log(`error occur at getExpensesApi : ${error}`);
  }
};

export const addExpense = async (data) => {
  try {
    const ExpApiRes = await axios.post(
      "http://localhost:5000/api/add-expense",
      data,
    );
    const ExpResData = ExpApiRes.data;
    return ExpResData;
  } catch (error) {
    console.log(`error occur at addExpenseApi : ${error}`);
  }
};

export const loginUser = async (data) => {
  try {
    const LoginApiRes = await axios.post("http://localhost:5000/api/login", data);
    const LoginResData = LoginApiRes.data;
    console.log(LoginResData);
    return LoginResData;
  } catch (error) {
    console.log(`error occur at loginUserApi : ${error}`);
  }
};
