import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stores from "./Pages/Stores";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Stores />} />
      </Routes>
    </Router>
  );
};

export default App;
