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

export const RegisterUser = async (data) => {
  try {
    const RegisterApiRes = await axios.post(
      "http://localhost:5000/api/register",
      data,
    );
    const RegisterResData = RegisterApiRes.data;
    console.log(RegisterResData);
    return RegisterResData;
  } catch (error) {
    console.log(`error occur at RegisterUserApi : ${error}`);
  }
};

export const loginUser = async (data) => {
  try {
    const LoginApiRes = await axios.post(
      "http://localhost:5000/api/login",
      data,
    );
    const LoginResData = LoginApiRes.data;
    console.log(LoginResData);
    return LoginResData;
  } catch (error) {
    console.log(`error occur at LoginUserApi : ${error}`);
  }
};

export const saveSalary = async (data) => {
  try {
    const SalaryApiRes = await axios.post(
      "http://localhost:5000/api/savesalary",
      data,
    );
    const SalaryResData = SalaryApiRes.data;
    return SalaryResData;
  } catch (error) {
    console.log(`error occur at saveSalaryApi : ${error}`);
  }
};
