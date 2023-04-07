import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "Page/Main";
import Login from "Page/Login";
import "Style/Section.css";
import Profession from "Page/Profession";
import Information from "Page/Information";
import Quest from "Page/Quest";
import Join from "Page/Join";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/profession" element={<Profession />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/Quest" element={<Quest />} />
    </Routes>
  );
};

export default App;
