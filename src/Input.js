import React, { useRef, useEffect } from "react";

const Input = ({ label, type, inputValue, setInputValue }) => {
  const inputRef = useRef();
  
  useEffect(()=>{
    if (inputValue <= 0) {
      inputRef.current.style.border = "2px solid rgb(225, 112, 82)";
    } else {
      inputRef.current.style.border = "2px solid rgb(82, 225, 106)";
    }
    if(!inputValue) {
      inputRef.current.style.border = 'none'
    }
  }, [inputValue])

  return (
    <>
      <label
        htmlFor={type}
        className={`input-section__${type}--label`}
      >
        {label}
      </label>
      <input
        type='number'
        name={type}
        placeholder='0'
        className={`input-section__${type}`}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        ref={inputRef}
      />
    </>
  );
};

export default Input;
