import { useState } from "react";
import styles from "./Nav.module.css";
import navLogo from "../assets/nav_logo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${styles.nav_wrapper} ${isMenuOpen ? styles.active : ""}`}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={navLogo} alt="" />
        </NavLink>
      </div>
      <ul className={`${styles.nav_links} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Usluge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projekti"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projekti
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cjenik"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cjenik
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontakt"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Kontakt
          </NavLink>
        </li>
        <div className={styles.jezici}>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HR
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ENG
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            DE
          </NavLink>
        </div>
        <div className={styles.podnaslov}>
          <p>Frontend development</p>
          <p>Izrada web stranica</p>
          <p>Izrada google business profila</p>
        </div>
      </ul>
      <div
        className={`${styles.ham_menu} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Nav;
