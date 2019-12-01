import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PagesStyles/LoginPage.scss";

const Registration = () => {
  return (
    <form>
      <div class="inputsWidth registration">
        <div class="user-box">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nazwa użytkownika"
          />
        </div>
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

        <div class="reCaptcha">reCaptcha placeholder</div>
        <div class="privacyPolicyText inputBox">
          <input
            type="checkbox"
            name="regulations"
            value="1"
            required="required"
            id="regulations"
          />
          <label htmlFor="regulations">
            Zapoznałem się i akceptuję&nbsp;
            <NavLink to="/regulamin"> regulamin</NavLink>
          </label>
        </div>
        <div class="privacyPolicyText inputBox lastCheckbox">
          <input
            type="checkbox"
            name="privacy_policy"
            value="1"
            required="required"
            id="privacy_policy"
          />
          <label htmlFor="privacy_policy">
            Zapoznałem się i akceptuję&nbsp;
            <NavLink to="/polityka_prywatnosci"> politykę prywatności</NavLink>
          </label>
        </div>
        <div class="button-text-box-1">Zarejestruj</div>
      </div>
    </form>
  );
};

export default Registration;
