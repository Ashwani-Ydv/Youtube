import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Cricket",
  "Live",
  "Gaming",
  "Cricket",
  "Live",
  "Gaming",
  "Cricket",
  "Live",
  "Gaming",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button key={Math.random()} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
