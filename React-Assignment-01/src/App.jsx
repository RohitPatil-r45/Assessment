import { useState } from "react";
import AllProductPage from "./Components/AllProductPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
