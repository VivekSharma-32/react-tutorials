import { useReducer } from "react";

function Test() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" onChange={toggle} checked={checked} />
      {checked ? "checked" : "not checked"}
    </div>
  );
}

export default Test;
