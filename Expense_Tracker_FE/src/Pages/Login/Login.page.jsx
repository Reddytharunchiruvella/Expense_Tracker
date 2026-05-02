import "./Login.style.css";
import { Button } from "../../Components/Button/Button.component";
import {
  InputNum,
  InputText,
} from "../../Components/InputComponent/Input.component";
import { Heading } from "../../Components/Heading/Heading.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/Expensestracker";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [salary, setSalary] = useState("");
  const [savePopup, setSavePopup] = useState(false);
  const navigate = useNavigate();

  const IsValid =
    name.trim() !== "" && mobile.trim().length === 10 && salary.trim() !== "";

  const LoginFunc = async () => {
    try {
      const userDetails = await loginUser({
        name,
        mobile,
        salary,
      });
      console.log("USER:", userDetails);
      navigate("/home", { state: userDetails });
    } catch (error) {
      console.error("error at loginFunc:", error);
    }
  };

  const SaveBtn = () => {
    setSavePopup(true);
  };

  return (
    <>
      <div className="Login-container">
        <div className="Login-box">
          <Heading heading="Expense Tracker" />
          {savePopup && <p>Saved successfully !!!</p>}
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
          <InputNum
            PHname="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <Button BtnName="Login" disabled={!IsValid} onClick={LoginFunc} />
          <Button BtnName="Save" disabled={!IsValid} onClick={SaveBtn} />
        </div>
      </div>
    </>
  );
};
