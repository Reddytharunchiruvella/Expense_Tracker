import { useNavigate } from "react-router-dom";
import "./Button.style.css";

export const Button = ({ BtnName, disabled, onClick }) => {
  return (
    <>
      <button className="login-btn" disabled={disabled} onClick={onClick}>
        {BtnName}
      </button>
    </>
  );
};

export const ButtonAdd = ({ BtnName, addDataDB, disabled }) => {
  return (
    <>
      <button className="addExp-btn" disabled={disabled} onClick={addDataDB}>
        {BtnName}
      </button>
    </>
  );
};

export const ButtonIcon = ({ BtnIcon, clickFunc }) => {
  return (
    <>
      <button className="add-btn" onClick={clickFunc}>
        {BtnIcon}
      </button>
    </>
  );
};

export const ButtonCircle = ({ BtnCircle, closeFunc }) => {
  return (
    <>
      <button className="cancle-btn" onClick={closeFunc}>
        {BtnCircle}
      </button>
    </>
  );
};

export const PNFButton = ({ BtnName }) => {
  const navigate = useNavigate();

  const PNFFunc = () => {
    navigate("/");
  };

  return (
    <>
      <button className="PNF-btn" onClick={PNFFunc}>
        {BtnName}
      </button>
    </>
  );
};
