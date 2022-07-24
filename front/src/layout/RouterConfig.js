// App
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { paths } from "utils/constants";
import FindCar from "./FindCar/FindCar";

// Layout
import Home from "./Home/Home";
import ListCar from "./ListCar/ListCar";
import Settings from "./Settings/Settings";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={paths.homePath} element={<Home />} />
      <Route path={paths.findCarPath} element={<FindCar />} />
      <Route path={paths.listCarPath} element={<ListCar />} />
      <Route path={paths.settingsPath} element={<Settings />} />

      {/* Redirect to home on unknown paths */}
      <Route path="*" element={<Navigate to={paths.homePath} />} />
    </Routes>
  );
};

export default RouterConfig;
