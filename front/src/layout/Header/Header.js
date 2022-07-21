import React from "react";

import { ReactComponent as MainLogo } from "assets/main-logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <MainLogo className="main-logo" />
    </div>
  );
};

export default Header;
