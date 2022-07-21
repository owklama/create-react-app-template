// App
import React from "react";
import { useGetScreenHeight } from "hooks/useGetScreenHeight";

// Components
import Header from "layout/Header/Header";
import RouterConfig from "layout/RouterConfig";

import "./App.css";

const App = () => {
  const height = useGetScreenHeight(); // Mobile height fix
  return (
    <>
      <Header />

      <main className="main-wrapper" style={{ height }}>
        <RouterConfig />
      </main>
    </>
  );
};

export default App;
