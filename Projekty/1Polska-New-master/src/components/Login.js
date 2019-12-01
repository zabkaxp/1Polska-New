import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PagesStyles/LoginPage.scss";

const Login = () => {
  return (
    <form>
      <div class="inputsWidth">
        <div class="email-box">
          <input type="email" name="email" id="email" placeholder="E-mail" />
        </div>
        <div class="password-box">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Hasło"
          />
        </div>

        <div class="button-text-box-1">Zaloguj</div>
      </div>
      <NavLink class="forgotPasswordText" to="/odzyskaj_haslo">
        Zapomniałeś hasła?
      </NavLink>
      <div class="privacyPolicyText">
        Logowanie oznacza akceptację{" "}
        <NavLink to="/polityka_prywatnosci">polityki prywatności </NavLink>
      </div>
    </form>
  );
};

export default Login;
