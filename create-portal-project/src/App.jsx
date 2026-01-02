import { useState } from "react";
import Modal from "./Modal";
// import PortalTest from "./PortalTest";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: "30px" }}>
      <h1>App component</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h1>Modal Heading</h1>
        <p>This is a simple model text without context.</p>
      </Modal>
      {/* <PortalTest /> */}
    </div>
  );
};

export default App;
