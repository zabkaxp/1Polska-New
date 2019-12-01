import React from "react";
import "../styles/PagesStyles/LoginPage.scss";

const ForgotPassword = () => {
  return (
    <div>
      <form className="loginPage-box inputsWidth forgotPassword">
        <h2>Odzyskiwanie hasła</h2>
        <div className="forgotPasswordInstructions">
          Wpisz adres konta, do którego chcesz odzyskać dostęp:
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="wpisz swoj adres e-mail"
        />

        <div className="button-text-box-1">Dalej</div>
      </form>
    </div>
  );
};

export default ForgotPassword;
