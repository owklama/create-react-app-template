// App
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavbarItem = (props) => {
  const { title, route } = props;

  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? styles.navlink_active : styles.navlink
      }
    >
      <li className={styles.navlink_title}>{title}</li>
    </NavLink>
  );
};

export default NavbarItem;
