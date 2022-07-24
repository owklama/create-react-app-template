// App
import React from "react";

// Components
import Navbar from "layout/Navbar/Navbar";
import RouterConfig from "layout/RouterConfig";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <RouterConfig />
    </>
  );
};

export default App;
