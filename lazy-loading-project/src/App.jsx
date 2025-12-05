import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Contact = lazy(() => import("./Contact"));
const Products = lazy(() => import("./Products"));
const About = lazy(() => import("./About"));

const Post = lazy(() => import("./Post"));

const App = () => {
  const [showPost, setShowPost] = useState(false);
  return (
    <div>
      <button onClick={() => setShowPost(true)}>Show Posts</button>
      {showPost && (
        <Suspense fallback={<div>Loading...</div>}>
          <Post />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
