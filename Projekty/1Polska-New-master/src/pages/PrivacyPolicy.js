import React from "react";
import "../styles/PagesStyles/PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacyPolicy">
      <h1>Polityka prywatności</h1>
      <p>
        {" "}
        <span className="thicker">
          1Polska.pl jest prywatną, niekomercyjną stroną o charakterze
          społecznym - i powstała "pro publico bono".
          <br />
          <br /> 1Polska.pl NIE udostępnia (i nie będzie udostępniać) żadnych
          danych swoich użytkowników innym serwisom ani podmiotom zewnętrznym.{" "}
          <br />
          <br />
          1Polska.pl NIE jest przedsięwzięciem biznesowym, nie ma żadnych
          partnerów biznesowych i nie przetwarza żadnych danych w celach
          biznesowych.
        </span>
      </p>
      <h1>Zarejestrowani/zalogowani użytkownicy</h1>
      <p>
        Rejestracja/zalogowanie (poprzez formularz na stronie lub poprzez konta
        społecznościowe: google lub facebook) jest dobrowolna ale konieczna aby
        w pełni korzystać z funkcjonalności strony. Nie jest wymagana aby
        przeglądać zawartość strony.
        <br />
        <br /> Podczas rejestracji użytkownika (utworzenia konta) strona
        1Polska.pl potrzebuje i gromadzi następujące dane:
        <br /> - Adres email,
        <br /> - Nazwę (Login) użytkownika (wpisaną w formularzu rejestracyjnym
        lub powiązaną z kontem społecznościowym z którego nastąpiło logowanie),
        <br /> - Avatar (zdjęcie) użytkownika powiązane z kontem na Google,
        Facebook'u, lub Gravatar - w zależności od sposobu
        rejestracji/logowania.
        <br />
        <br /> Użytkownicy mają prawo i możliwość usunięcia swojego konta wraz
        ze swoimi danymi - jeśli zechcą tak zrobić.
        <br />
        <br />{" "}
        <span className="thicker">Adresy email użytkowników są poufne</span>
        (wyłącznie do wiadomości administratorów) i nie są nigdzie na stronie
        publikowane ani widoczne.
        <br />
        <br /> Podczas logowania zapisywany jest aktualny adres IP logującego
        się użytkownika. Żadne dane użytkowników wymienione powyżej nie są
        publikowane w żadnym miejscu strony 1Polska.pl.
        <br />
        <br />
        <span className="thicker">
          Strona 1Polska.pl opiera się na wzajemnym zaufaniu jej użytkowników.
          <br />
          <br />
          Niedopuszczalne jest tworzenie więcej niż jednego konta użytkownika
          (multikont) przez jedną i tą samą osobę w celu manipulowania ilością
          głosów.
        </span>
      </p>
      <h1>Reprezentanci</h1> Każdy zalogowany użytkownik może zaproponować
      siebie (i tylko siebie) na reprezentanta.
      <br />
      <br /> Robiąc to,{" "}
      <span className="thicker">
        jednocześnie oświadcza, że zgadza się na upublicznienie (opublikowanie)
        na stronie 1Polska.pl swoich danych oraz wszystkich informacji o sobie
      </span>
      , które dobrowolnie poda wypełniając formularz dodawania/edycji
      reprezentanta. W szczególności dotyczy to jego/jej danych osobowych takich
      jak: imię i nazwisko oraz wizerunek (zdjęcie twarzy), nr swojego okręgu
      wyborczego zgodnego z miejscem zamieszkania. <br />
      <br />
      Ponadto{" "}
      <span className="thicker">
        wyraża zgodę, na upublicznienie swoich głosów poparcia oddanych poprzez
        stronę 1Polska.pl
      </span>{" "}
      jako zalogowany użytkownik (kciuk w górę oraz kciuk w dół przy
      reprezentantach oraz poparcie dla poszczególnych postulatów). Informacje o
      jego głosach poparcia będą widoczne na stronie jego profilu reprezentanta
      - oraz na stronach poszczególnych postulatów
      <br />
      <br />
      Każdy reprezentant ma możliwość trwałego usunięcia (skasowania) swojego
      profilu w dowolnym momencie. (podczas edycji swojego profilu) Usunięcie
      swojego konta użytkownika - również skutkuje jednoczesnym usunięciem
      swojego profilu reprezentanta.
      <br /> <br />
      <span className="thicker">
        NIEDOPUSZCZALNE jest posługiwanie się nie swoimi lub nieprawdziwymi
        danymi podczas dodawania profilu reprezentanta.
      </span>
      <br />
      <br />
      Strona 1Polska.pl wykorzystuje tzw. widgety innych serwisów internetowych
      takich jak np.: google, facebook, gravatar - i nie odpowiada w żaden
      sposób za politykę prywatności ani praktyki tych (zewnętrznych)
      firm/serwisów internetowych. Korzysta jedynie z ogólnie dostępnych
      funkcjonalności społecznościowych tych zewnętrznych serwisów.
    </div>
  );
};

export default PrivacyPolicy;
