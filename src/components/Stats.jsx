import React from "react";

const Stats = ({ items }) => {
  if (!items?.length) {
    return (
      <p className="stats">
        <em>Start adding items to your list 🚀.</em>
      </p>
    );
  }

  const numItems = items?.length;
  const numPacked = items?.filter((item) => item?.packed).length;
  const numpackedPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numpackedPercentage === 100
          ? "You got everything! Ready to go ✈️."
          : `💼 You have ${numItems} ${
              numItems === 1 ? "item" : "items"
            } on your list, and you already packed
        ${numPacked} ${
              numPacked === 1 ? "item" : "items"
            } (${numpackedPercentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
