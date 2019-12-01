import React from "react";
import "../styles/PagesStyles/ContactPage.scss";
import logoicon from "../images/ico_1_42x42.png";
import rollupWhite from "../images/ico_rollup_white.jpg";
import rollupBlue from "../images/ico_rollup_blue.png";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <h1>Kontakt dla osób chcących działać "w realu"</h1>
      {/* Here starts the first row */}
      <div className="contact-persons-row">
        <div className="contact-person col-1">
          <div className="contact-name">Jarek Zienkiewicz</div>
          <div>organizacja, komunikacja</div>
          <div className="contact-mail">
            <a href="mailto:Jarek1PL@gmail.com?Subject=1Polska%20stronaWWW">
              Jarek1PL@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-person col-2">
          <div className="contact-name">Jan Sposób</div>
          budowa struktur lokalnych
          <div className="contact-mail">
            {" "}
            <a href="mailto:jan.sposob@o2.pl?Subject=1Polska%20struktury%20stronaWWW">
              jan.sposob@o2.pl
            </a>
          </div>
          <div> +48 794 999 711</div>
        </div>
      </div>
      {/* Here starts the second row */}
      <h1>Administratorzy strony</h1>
      <div className="contact-persons-row">
        <div className="contact-person col-1">
          <div className="contact-name">Konrad Daniel</div>
          <div>
            pomysłodawca
            <br /> sprawy merytoryczne i zgłoszenia reprezentantów
          </div>
          <div className="contact-mail">
            <a href="mailto:podziemnatv@gmail.com?Subject=1Polska%20stronaWWW">
              podziemnatv@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-person col-2">
          <div className="contact-name">Michał Turek</div>
          <div>
            sprawy techniczne
            <br />
            główny programista i autor kodu strony
          </div>
          <div className="contact-mail">
            {" "}
            <a href="mailto:asgraf+1polska@gmail.com?Subject=1Polska%20stronaWWW">
              asgraf+1polska@gmail.com
            </a>
          </div>
        </div>
      </div>
      <h1 className="kontakt">
        Dla programistów i grafików
        <br /> chętnych pomóc w doskonaleniu strony
      </h1>
      Kod źródłowy tej strony przeznaczony dostępny na zasadach OpenSource.
      <br />
      Repozytorium znajduje się:{" "}
      <a href="https://github.com/asgraf/1polska">TUTAJ</a>
      <div className="downloads">
        <h1 className="downloads-title">Materiały do pobrania</h1>
        <ul className="downloads-items">
          <li className="downloads-item">
            <div> Logo 1Polska (400x400)</div> {/*  link has to be reviewed */}
            <a
              href="http://1Polska.pl/img/1polska_logo_400X400.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoicon} alt="icon 1polska" />
            </a>
          </li>
          <li className="downloads-item">
            <div>Biały rollup 1Polska (85x200)</div>{" "}
            {/*  link has to be reviewed */}
            <a
              href="http://1Polska.pl/img/1PL_rollup_bialy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rollupWhite} alt="link to white rollup" />
            </a>{" "}
          </li>
          <li className="downloads-item">
            {/*  link has to be reviewed */}
            <div> Niebieski rollup 1Polska (85x200)</div>
            <a
              href="http://1Polska.pl/img/1PL_rollup_blue.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rollupBlue} alt="link to blue rollup" />
            </a>
          </li>
        </ul>
        <h1 className="contact-faq">FAQ - najczęściej zadawane pytania:</h1>
        1. Problem z zalogowaniem przez Facebook? Ustawienia facebooka
        prawdopodobnie blokują dostęp do adresu email niezbędnego do utworzenia
        konta. W takim przypadku proszę wejść na
        <a href="https://www.facebook.com/settings?tab=applications"> link </a>z
        ustawieniami i usunąć stamtąd aplikację 1Polska i przy kolejnej próbie
        logowania na stronę 1Polska proszę NIE BLOKOWAĆ dostępu do adresu email.
      </div>
    </div>
  );
};

export default ContactPage;
