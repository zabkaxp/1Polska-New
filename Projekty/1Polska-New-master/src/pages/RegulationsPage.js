import React from "react";
import "../styles/PagesStyles/PrivacyPolicy.scss";

const RegulationsPage = () => {
  return (
    <div class="privacyPolicy">
      <h1>Regulamin</h1>
      <p>
        1. Niedopuszczalne jest tworzenie więcej niż jednego konta użytkownika
        przez jedną osobę w celu manipulacji głosami.
        <br />
        <br />
        2. Niedopuszczalne jest posługiwanie się nie swoimi danymi lub
        nieprawdziwymi danymi podczas dodawania nowego reprezentanta lub edycji
        reprezentanta.
        <br />
        <br />
        3. Za posługiwanie się cudzymi (nie swoimi) danymi - w szczególności
        imieniem i nazwiskiem oraz wizerunkiem (zdjęciem twarzy) grozi
        odpowiedzialność karna. Będzie to traktowane jak próba podszywania się
        pod kogoś innego i takie przypadki będą zgłaszane odpowiednim organom
        ścigania.
        <br />
        <br />
        4. Niedopuszczalne jest publikowanie treści wulgarnych lub obraźliwych,
        pornograficznych czy promujących przemoc w jakiejkowiek formie.
      </p>
    </div>
  );
};

export default RegulationsPage;
