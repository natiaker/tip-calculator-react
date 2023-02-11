import React, { useEffect } from "react";
import PriceSection from "./PriceSection";
import { useGlobalContext } from "./context";

const ResultSection = () => {
  const {
    billValue,
    tipAmount,
    customTipAmount,
    peopleAmount,
    tipPrice,
    setTipPrice,
    totalPrice,
    setTotalPrice,
    refContainer,
    handleReset,
  } = useGlobalContext();

  useEffect(() => {
    if (billValue && tipAmount && peopleAmount) {
      let newTipPrice = (
        peopleAmount === 0
          ? peopleAmount
          : (billValue * tipAmount) / 100 / peopleAmount
      ).toFixed(2);

      let newTotalPrice = (
        peopleAmount === 0
          ? peopleAmount
          : (billValue * (1 + tipAmount / 100)) / peopleAmount
      ).toFixed(2);

      refContainer.current.style.backgroundColor = "#26C2AE";

      if (billValue <= 0 || peopleAmount <= 0 || customTipAmount < 0) {
        setTipPrice("0.00");
        setTotalPrice("0.00");
      } else {
        setTipPrice(newTipPrice);
        setTotalPrice(newTotalPrice);
      }
    }
  }, [
    billValue,
    tipAmount,
    peopleAmount,
    customTipAmount,
    refContainer,
    setTipPrice,
    setTotalPrice,
  ]);

  return (
    <div className='result-section'>
      <PriceSection
        label='Tip Amount '
        priceType={tipPrice}
      />
      <PriceSection
        label='Total '
        priceType={totalPrice}
      />
      <button
        className='result-section__reset'
        onClick={handleReset}
        ref={refContainer}
        disabled={!billValue || !tipAmount || !peopleAmount}
      >
        RESET
      </button>
    </div>
  );
};

export default ResultSection;
