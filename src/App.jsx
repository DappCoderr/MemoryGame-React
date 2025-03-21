import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./component/Game";
import Victory from "./component/Victory";
import Error from "./component/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/victory" element={<Victory />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
