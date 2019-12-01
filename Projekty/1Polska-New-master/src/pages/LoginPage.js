import React, { Component } from "react";
import "../styles/PagesStyles/LoginPage.scss";
import Login from "../components/Login";

import Registration from "../components/Registration";

class LoginPage extends Component {
  state = {
    isLoginOpen: true,
    isRegisterOpen: false
  };

  registrationToggle = () => {
    if (this.state.isLoginOpen) {
      console.log("otwieram registr");
      this.setState({
        isLoginOpen: false,
        isRegisterOpen: true
      });
    }
  };
  loginToggle = () => {
    if (this.state.isRegisterOpen) {
      console.log("otwieram login");
      this.setState({
        isLoginOpen: true,
        isRegisterOpen: false
      });
    }
  };

  render() {
    return (
      <div className="loginPage">
        <div className="loginPage-box">
          <div className="login-box">
            <div className="login-boxToggle ">
              <h2
                onClick={() => this.loginToggle()}
                className={`loginHeader loginPageHeader ${
                  this.state.isLoginOpen ? "activeLogin" : ""
                }`}
              >
                Logowanie
              </h2>
              <h2
                onClick={() => this.registrationToggle()}
                className={`registrationHeader loginPageHeader ${
                  this.state.isRegisterOpen ? "activeRegistration" : ""
                }`}
              >
                Rejestracja
              </h2>
            </div>
            {this.state.isLoginOpen ? <Login /> : <Registration />}
          </div>
          <div className="register-box" />
        </div>
        <div className="loginPageInstructions">
          <p>
            Rejestrować i logować można się za pomocą swojego konta na facebooku
            lub konta google+. Tak jest najprościej.
            <br />
            <br />
            Oprócz tego można się zarejestrować, a potem logować, poprzez
            formularz na stronie – podając jedynie swój email (nie będzie
            widoczny dla innych użytkowników) oraz preferowaną nazwę
            użytkownika. Hasło do zalogowania zostanie wysłane na podany email –
            a następnie, po pierwszym zalogowaniu można ustawić własne hasło
            klikając w menu w „edytuj profil”.
            <br />
            <br />
            Indywidualne ikonki użytkowników są pobierane z konta na facebooku,
            google+ lub z serwisu gravatar – w zależności od metody rejestracji.{" "}
            <br />
            <br /> Dla celów zabezpieczenia przed inwazją botów i atakami
            sabotażu – rejestracja i logowanie poprzez formularz na stronie są
            zabezpieczone za pomocą „capcha” (trzeba „udowodnić”, że nie jest
            się botem) – proszę wybaczyć i zrozumieć tą minimalną niedogodność.
          </p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
