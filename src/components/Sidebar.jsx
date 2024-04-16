import { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

import cn from "classnames";

import styles from "../styles/main.module.scss";

import Icon from "../assets/Icon.svg";
import News from "../assets/news.svg";
import Profile from "../assets/profile.png";
import Support from "../assets/support.svg";
import Settings from "../assets/settings.svg";
import Dashboard from "../assets/dashboard.svg";
import Performance from "../assets/performance.svg";
import Transactions from "../assets/transactions.svg";

const Sidebar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={cn(styles.sidebar, { [styles.active]: closeMenu })}>
      <div
        className={cn(styles.sidebar__logo, styles.logo, { [styles.active]: closeMenu })}
      >
        <img src={Icon} alt="icon" />
        <h2 className={styles.logo__title}>evergreen. </h2>
      </div>

      <div
        className={cn(styles.sidebar__burger, styles.burger, {
          [styles.active]: closeMenu,
        })}
      >
        <div
          className={styles.burger__trigger}
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className={styles.burger__menu}></div>
      </div>

      <div
        className={cn(styles.sidebar__profile, styles.profile, {
          [styles.active]: closeMenu,
        })}
      >
        <img src={Profile} alt="profile" />
        <div className={styles.profile__contents}>
          <p className={styles.profile__name}>Hello, John👋</p>
          <p className={styles.profile__email}>johnsmith@gmail.com</p>
        </div>
      </div>

      <div
        className={cn(styles.sidebar__contents, styles.contents, {
          [styles.active]: closeMenu,
        })}
      >
        <NavLink
          to="/"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/",
          })}
        >
          <img src={Dashboard} alt="dashboard" />
          <span className={styles.contents__text}>dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/transactions",
          })}
        >
          <img src={Transactions} alt="transactions" />
          <span className={styles.contents__text}>transactions</span>
        </NavLink>

        <NavLink
          to="/performance"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/performance",
          })}
        >
          <img src={Performance} alt="Performance" />
          <span className={styles.contents__text}>performance</span>
        </NavLink>

        <NavLink
          to="/news"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/news",
          })}
        >
          <img src={News} alt="News" />
          <span className={styles.contents__text}>news</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/settings",
          })}
        >
          <img src={Settings} alt="Settings" />
          <span className={styles.contents__text}>settings</span>
        </NavLink>

        <NavLink
          to="/support"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === "/support",
          })}
        >
          <img src={Support} alt="Support" />
          <span className={styles.contents__text}>support</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
