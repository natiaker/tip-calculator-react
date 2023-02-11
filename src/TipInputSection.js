import React, { useEffect } from "react";
import TipButton from "./TipButton";
import { useGlobalContext } from "./context";

const TipInputSection = () => {
  const {
    customTipAmount,
    buttons,
    inputRef,
    getTipAmount,
    handleChange,
  } = useGlobalContext();
  
  useEffect(()=>{
    if (customTipAmount < 0) {
      inputRef.current.style.border = "2px solid rgb(225, 112, 82)";
    } else {
      inputRef.current.style.border = "2px solid rgb(82, 225, 106)";
    }
    if (!customTipAmount) {
      inputRef.current.style.border = "none";
    }
  },[customTipAmount, inputRef]) 

  return (
    <>
      <p className='input-section__p'>Select Tip %</p>
      <div
        className='input-section__tip'
        onClick={getTipAmount}
      >
        {buttons.map((buttonLabel, index) => {
          return (
            <TipButton
              key={index}
              buttonLabel={buttonLabel}
            />
          );
        })}
        <input
          type='number'
          placeholder='Custom'
          className='input-section__tip--input'
          value={customTipAmount}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
    </>
  );
};

export default TipInputSection;
