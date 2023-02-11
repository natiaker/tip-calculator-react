import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [billValue, setBillValue] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [customTipAmount, setCustomTipAmount] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [isButton, setIsButton] = useState(false);
  const [prevButton, setPrevButton] = useState(null);
  const [billAlert, setBillAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [peopleAlert, setPeopleAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showBillAlert = (show = false, msg = "", type = "") => {
    setBillAlert({ show, msg, type });
  };
  const showPeopleAlert = (show = false, msg = "", type = "") => {
    setPeopleAlert({ show, msg, type });
  };

  //TipInputSection variables
  const buttons = [5, 10, 15, 25, 50];
  const inputRef = useRef();

  const activeButton = event => {
    if (prevButton !== null) {
      prevButton.style.backgroundColor = "#00474B";
    }
    event.target.style.backgroundColor = "#26C2AE";
    setPrevButton(event.target);
  };

  const getTipAmount = event => {
    if (event.target.tagName === "BUTTON") {
      setIsButton(true);
      const newTipAmount = parseInt(event.target.innerText);
      setTipAmount(newTipAmount);
      activeButton(event);
    } else {
      setIsButton(false);
      handleChange(event);
      if (prevButton !== null) {
        prevButton.style.backgroundColor = "#00474B";
      }
    }
  };

  const handleChange = event => {
    setCustomTipAmount(event.target.value);
    const newTipAmount = event.target.value;
    setTipAmount(newTipAmount);
  };

  // Result Section variables
  const [tipPrice, setTipPrice] = useState("0.00");
  const [totalPrice, setTotalPrice] = useState("0.00");
  const refContainer = useRef(null);

  const handleReset = () => {
    setBillValue("");
    setTipAmount("");
    setPeopleAmount("");
    setTipPrice("0.00");
    setTotalPrice("0.00");
    setIsButton(false);
    setCustomTipAmount("");
    refContainer.current.style.backgroundColor = "#0D686D";
    if (prevButton !== null) {
      prevButton.style.backgroundColor = "#00474B";
    }
  };

  return (
    <AppContext.Provider
      value={{
        billValue,
        tipAmount,
        customTipAmount,
        peopleAmount,
        isButton,
        prevButton,
        billAlert,
        peopleAlert,
        buttons,
        inputRef,
        tipPrice,
        totalPrice,
        refContainer,
        setTipPrice,
        setTotalPrice,
        handleReset,
        activeButton,
        getTipAmount,
        handleChange,
        setBillValue,
        setTipAmount,
        setCustomTipAmount,
        setPeopleAmount,
        setIsButton,
        setPrevButton,
        setBillAlert,
        setPeopleAlert,
        showBillAlert,
        showPeopleAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
