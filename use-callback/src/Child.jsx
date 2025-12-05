import React from "react";

const Child = ({ click }) => {
  console.log("Child re-rendered");

  return <button onClick={click}>Child button</button>;
};

export default React.memo(Child);
