import React, { useEffect, useState } from "react";

const Button = ({ children, ...props }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <button type={"button"} onClick={handleClick} {...props}>
      {children}
      <span>:{count}</span>
    </button>
  );
};

export default Button;
