import "./App.css";
import { LoginPage } from "./Pages/Login/Login.page";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home/Home.page";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
