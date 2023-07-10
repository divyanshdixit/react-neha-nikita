import React from "react";

const Conditional = () => {
  const cat = "veg" || "nonVeg";
  const vegItems = ["one", "two", "three"];
  const nonVegItems = ["four", "five", "six"];

  if (cat === "veg") {
    return (
      <div>
        {vegItems.map((val, idx) => {
          return <h1> {val} </h1>;
        })}
      </div>
    );
  } else if (cat === "nonVeg") {
    return (
      <div>
        {nonVegItems.map((val, idx) => {
          return <h1> {val} </h1>;
        })}
      </div>
    );
  }
};

const Conditional2 = () => {
  const cat = "veg" || "nonVeg";
  const vegItems = ["one", "two", "three"];
  const nonVegItems = ["four", "five", "six"];

  return (
    <div>
      {cat === "nonVeg"
        ? vegItems.map((val, idx) => {
            return <h1> {val} </h1>;
          })
        : nonVegItems.map((val, idx) => {
            return <h1> {val} </h1>;
          })}
    </div>
  );
};

export default Conditional;
export { Conditional2 };
