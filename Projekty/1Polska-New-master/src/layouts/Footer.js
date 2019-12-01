import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-pages footer-pages-col-1">
        <ul>
          <li>
            <NavLink className="link-li" to="reprezentanci">
              Reprezentanci
            </NavLink>
          </li>
          <li>
            <NavLink className="link-li" to="postulaty">
              Postulaty
            </NavLink>
          </li>
          <li>
            <NavLink className="link-li" to="kontakt">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink className="link-li" to="feedback">
              Zgłoś błąd lub sugestię
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-pages footer-pages-col-2">
        <ul>
          <li>
            <NavLink className="link-li" to="informacje_o_stronie">
              Informacje o stronie
            </NavLink>
          </li>
          <li>
            <NavLink className="link-li" to="polityka_prywatnosci">
              Polityka prywatności
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
