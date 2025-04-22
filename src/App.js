import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./ButtonsClasses.scss";
import ManagementMain from "./taskMG/ManagementMain";

function AppContent() {
 

 
  return (
    <div className="text-gray-600 text-sm">
      {/* {isLoggedIn ? (
        <Layout />
      ) : isSignup ? (
        <Signup />
      ) : (
        <Login onSignupClick={handleSignupClick} />
      )} */}

      {/* <Layout /> */}
      <ManagementMain/>
      <Toaster />
    </div>
  );
}

function App() {
  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  );
}

export default App;
