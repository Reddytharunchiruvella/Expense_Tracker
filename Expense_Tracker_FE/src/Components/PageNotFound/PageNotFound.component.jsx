import { PNFButton } from "../Button/Button.component";
import "./PageNotFound.style.css";

export const PageNotFound = () => {
  return (
    <>
      <div className="PNF-Container">
        <h1>Page Not Found...!!!</h1>
        <PNFButton BtnName="Back" />
      </div>
    </>
  );
};
