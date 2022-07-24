// App
import React from "react";
import { paths } from "utils/constants";

// Components
import { ReactComponent as MainLogo } from "assets/main-logo.svg";
import NavbarItem from "./NavbarItem";

// Styles
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    {
      title: "Find car",
      route: paths.findCarPath,
    },
    {
      title: "List my car",
      route: paths.listCarPath,
    },
    {
      title: "Settings",
      route: paths.settingsPath,
    },
  ];
  return (
    <div className={styles.navbar}>
      <NavLink to={paths.homePath}>
        <MainLogo className={styles.main_logo} />
      </NavLink>
      <div className={styles.container}>
        {navbarItems.map((item) => {
          return (
            <NavbarItem
              key={item.route}
              title={item.title}
              route={item.route}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
