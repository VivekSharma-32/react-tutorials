import React from "react";

function withStyle(WrappedComponent) {
  return function newComponent(props) {
    return (
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withStyle;
