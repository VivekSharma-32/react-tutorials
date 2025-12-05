import React from "react";
import Greeting from "./Greeting";
import GreetingWIthStyle from "./GreetingWIthStyle";
import PostListWithData from "./PostListWithData";
import Dashboard from "./Dashboard";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);
const App = () => {
  return (
    <div>
      <Greeting name={"Vivek Sharma"} />
      <GreetingWIthStyle name="Vivek Sudan" />
      {/* <PostListWithData /> */}
      <ProtectedDashboard />
    </div>
  );
};

export default App;
