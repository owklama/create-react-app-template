// App
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { paths } from "utils/constants";

// Layout
import Home from "./Home/Home";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={paths.homePath} element={<Home />} />

      {/* Redirect to home on unknown paths */}
      <Route path="*" element={<Navigate to={paths.homePath} />} />
    </Routes>
  );
};

export default RouterConfig;
