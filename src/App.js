import React from "react";
import logo from "./images/logo.svg";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

function App() {
  return (
    <>
      <header>
        <img
          src={logo}
          alt='splitter-logo'
          className='logo'
        />
      </header>
      <div className='container'>
        <InputSection />
        <ResultSection />
      </div>
    </>
  );
}

export default App;
