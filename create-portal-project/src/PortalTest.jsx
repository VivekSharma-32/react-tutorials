import { createPortal } from "react-dom";
const PortalTest = () => {
  return createPortal(
    <h1>Portal Test</h1>,
    document.querySelector("#test-root")
  );
};

export default PortalTest;
