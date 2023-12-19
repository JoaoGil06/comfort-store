import React from "react";

export const generateAmountOptions = (
  numberOfOptions: number
): React.ReactNode[] => {
  return Array.from({ length: numberOfOptions }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
