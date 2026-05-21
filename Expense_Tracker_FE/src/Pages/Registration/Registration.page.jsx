import "./Registration.style.css";
import { Button } from "../../Components/Button/Button.component";
import {
  InputNum,
  InputText,
} from "../../Components/InputComponent/Input.component";
import { Heading } from "../../Components/Heading/Heading.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../Services/Expensestracker";
import { loginUser } from "../../Services/Expensestracker";
import { Toaster, toast } from "react-hot-toast";

export const ExpenseTracker = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const registerBtn = () => {
    setRegister(true);
    setLogin(false);
  };

  const loginBtn = () => {
    setLogin(true);
    setRegister(false);
  };

  const IsValid = name.trim() !== "" && mobile.trim().length === 10;

  const RegisterFunc = async () => {
    try {
      const userDetails = await RegisterUser({
        name,
        mobile,
      });

      console.log("USER:", userDetails);

      if (!userDetails) {
        toast.error("Registration Failed");
        return;
      }

      navigate("/home", { state: userDetails });
    } catch (error) {
      console.error("error at loginFunc:", error);
    }
  };

  const IsValidLogin = mobile.trim().length === 10;

  const LoginFunc = async () => {
    try {
      const userDetails = await loginUser({
        mobile,
      });

      console.log("USER:", userDetails);

      if (!userDetails) {
        toast.error("Login Failed");
        return;
      }

      navigate("/home", { state: userDetails });
    } catch (error) {
      console.error("error at loginFunc:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="main-box">
          <h1>EXPENSES TRACKER</h1>
          <button onClick={registerBtn}>Register</button>
          <button onClick={loginBtn}>Login</button>
          {register && (
            <div className="Register-box">
              <Heading heading="REGISTER" />
              <InputText
                PHname="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputNum
                PHname="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Button
                BtnName="Register"
                disabled={!IsValid}
                onClick={RegisterFunc}
              />
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
          )}
          {login && (
            <div className="Login-box">
              <Heading heading="LOGIN" />
              <InputNum
                PHname="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Button
                BtnName="Login"
                disabled={!IsValidLogin}
                onClick={LoginFunc}
              />
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
          )}
        </div>
      </div>
    </>
  );
};
