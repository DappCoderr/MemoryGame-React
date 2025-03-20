import React from "react";
import Start from "./component/Start";
import { Routes, Route } from "react-router-dom";
import Game from "./component/Game";
import Victory from "./component/Victory";
import Error from "./component/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
      <Route path="/victory" element={<Victory />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
