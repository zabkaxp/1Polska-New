import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";
import img2 from "../images/youtube-logo.jpg";
import img3 from "../images/facebook-logo.jpg";

const Navigation = () => {
  return (
    <nav className="mainnav" role="navigation">
      <ul className="menu nav-list">
        <li>
          <NavLink to="o_co_chodzi">O co chodzi</NavLink>
        </li>
        <li>
          <NavLink to="postulaty">Postulaty</NavLink>
        </li>
        <li>
          <NavLink to="reprezentanci">Reprezentanci</NavLink>
        </li>
        <li>
          <NavLink to="kontakt">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="zaloguj">Logowanie</NavLink>
        </li>
        <li id="facebook">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/1polska/"
          >
            <img
              width="30"
              height="30"
              src={img3}
              className="menu-image"
              alt="facebook logo"
            />
          </a>
        </li>
        <li id="youtube" class="menu-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCb5mIKEv944_VLTOcdwH_MA/videos"
          >
            <img
              width="30"
              height="30"
              src={img2}
              className="menu-image"
              alt="youtube logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
