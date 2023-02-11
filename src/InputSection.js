import React, { useEffect } from "react";
import Input from "./Input";
import TipInputSection from "./TipInputSection";
import { useGlobalContext } from "./context";

const InputSection = () => {
  const {
    billValue,
    setBillValue,
    peopleAmount,
    setPeopleAmount,
    showBillAlert,
    billAlert,
    showPeopleAlert,
    peopleAlert,
  } = useGlobalContext();
  
  useEffect(() => {
    if (billValue <= 0) {
      showBillAlert(true, "Can't be zero or less", "danger");
    } else {
      showBillAlert(true, "", "success");
    }
    if (peopleAmount <= 0) {
      showPeopleAlert(true, "Can't be zero or less", "danger");
    } else {
      showPeopleAlert(true, "", "success");
    }
    if (!billValue && !peopleAmount) {
      showBillAlert(false, "", "");
      showPeopleAlert(false, "", "");
    }
    // eslint-disable-next-line
  }, [billValue, peopleAmount]);

  return (
    <div className='input-section'>
      <Input
        label='Bill'
        type='bill'
        inputValue={billValue}
        setInputValue={setBillValue}
        className={billAlert.show && "danger-border"}
      />
      {billAlert.show && (
        <span className={`alert alert--${billAlert.type}`}>
          {billAlert.msg}
        </span>
      )}
      <TipInputSection />
      <Input
        label='Number of People'
        type='people'
        inputValue={peopleAmount}
        setInputValue={setPeopleAmount}
      />
      {peopleAlert.show && (
        <span className={`alert alert--${peopleAlert.type}`}>
          {peopleAlert.msg}
        </span>
      )}
    </div>
  );
};

export default InputSection;
