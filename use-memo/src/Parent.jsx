import React, { useState, useMemo } from "react";
const Parent = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: "Vivek", age: 29 }), []);

  console.log("Parent component rendered");
  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
      <Child user={user} />
    </div>
  );
};

const Child = React.memo(({ user }) => {
  console.log("Child component rendered");
  return (
    <div>
      <h3>Child Component</h3>
      <p>User : {user.name}</p>
    </div>
  );
});

export default Parent;
