// import "./Login.style.css";
// import { Button } from "../../Components/Button/Button.component";
// import {
//   InputNum,
//   InputText,
// } from "../../Components/InputComponent/Input.component";
// import { Heading } from "../../Components/Heading/Heading.component";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../Services/Expensestracker";

// export const LoginPage = () => {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [salary, setSalary] = useState("");
//   const navigate = useNavigate();

//   const IsValid = mobile.trim().length === 10;

//   const LoginFunc = async () => {
//     try {
//       const userDetails = await loginUser({
//         mobile,
//       });

//       console.log("USER:", userDetails);

//       if (!userDetails) {
//         alert("Login failed");
//         return;
//       }

//       navigate("/home", { state: userDetails });
//     } catch (error) {
//       console.error("error at loginFunc:", error);
//     }
//   };

//   return (
//     <>
//       <div className="Login-container">
//         <div className="Login-box">
//           <Heading heading="Login" />
//           <InputNum
//             PHname="Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//           <Button BtnName="Login" disabled={!IsValid} onClick={LoginFunc} />
//         </div>
//       </div>
//     </>
//   );
// };
