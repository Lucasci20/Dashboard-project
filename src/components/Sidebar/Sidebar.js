import { useState } from "react";

import "./sidebar.scss";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-menu">
          <div>
            <i className="icon-menu" onClick={showSidebar}></i>
          </div>
        </div>

        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="nav-text">
              <a href="/">
                <img src={dashboardIcon} alt='ícone'></img>
                <span>Painel de Controle</span>
              </a>
              <div onClick={showSidebar} className="navbar-toggle">
                <a href="/">
                  <i className="icon-chevron-left"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
