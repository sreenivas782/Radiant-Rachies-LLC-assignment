import React from "react";
import NavPage from "./components/NavPage";
import "./App.css";
import BanerPage from "./BanerPage";

const LandingPage = () => {
  return (
    <>
       <NavPage />
    <div className="Main-box">
     
      <BanerPage/>
    </div>
      </>
  );
};

export default LandingPage;
