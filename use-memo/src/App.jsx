import React from "react";
import WithoutUseMemo from "./WithoutUseMemo";
import WithUseMemo from "./WithUseMemo";
import Parent from "./Parent";

const App = () => {
  return (
    <div>
      {/* <WithoutUseMemo /> */}
      {/* <WithUseMemo /> */}
      <Parent />
    </div>
  );
};

export default App;
