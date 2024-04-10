import { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

import cn from "classnames";

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
    <div className={cn("sidebar", { active: closeMenu })}>
      <div className={cn("sidebar__logo", "logo", { active: closeMenu })}>
        <img src={Icon} alt="icon" />
        <h2 className="logo__title">evergreen. </h2>
      </div>

      <div className={cn("sidebar__burger", "burger", { active: closeMenu })}>
        <div
          className="burger__trigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className="burger__menu"></div>
      </div>

      <div className={cn("sidebar__profile", "profile", { active: closeMenu })}>
        <img src={Profile} alt="profile" />
        <div className="profile__contents">
          <p className="profile__name">Hello, John👋</p>
          <p className="profile__email">johnsmith@gmail.com</p>
        </div>
      </div>

      <div className={cn("sidebar__contents", "contents", { active: closeMenu })}>
        <NavLink
          to="/"
          className={cn("contents__item", { active: location.pathname === "/" })}
        >
          <img src={Dashboard} alt="dashboard" />
          <span className="contents__text">dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={cn("contents__item", {
            active: location.pathname === "/transactions",
          })}
        >
          <img src={Transactions} alt="transactions" />
          <span className="contents__text">transactions</span>
        </NavLink>

        <NavLink
          to="/performance"
          className={cn("contents__item", {
            active: location.pathname === "/performance",
          })}
        >
          <img src={Performance} alt="Performance" />
          <span className="contents__text">performance</span>
        </NavLink>

        <NavLink
          to="/news"
          className={cn("contents__item", { active: location.pathname === "/news" })}
        >
          <img src={News} alt="News" />
          <span className="contents__text">news</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={cn("contents__item", {
            active: location.pathname === "/settings",
          })}
        >
          <img src={Settings} alt="Settings" />
          <span className="contents__text">settings</span>
        </NavLink>

        <NavLink
          to="/support"
          className={cn("contents__item", { active: location.pathname === "/support" })}
        >
          <img src={Support} alt="Support" />
          <span className="contents__text">support</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
