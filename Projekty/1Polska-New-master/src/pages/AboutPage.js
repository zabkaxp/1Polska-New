import React from "react";
import "../styles/PagesStyles/AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <iframe
        title="information about 1polska"
        src="https://docs.google.com/presentation/d/14gx2DUk-6XOd4p4TTQdhQJRuedCelurnQOc45IuTmTs/embed?start=true&amp;loop=true&amp;delayms=5000"
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />

      <h1>Czas się zjednoczyć!</h1>
      <p>
        "Dziel i rządź!" – według tej zasady działają wszystkie partie
        polityczne i cała obecna klasa polityczna. Cały ten chory system
        współczesnego wyzyskiwania i ekonomicznego niewolenia społeczeństw
        tworzony przez niegodziwych ludzi pociągających za sznurki opiera się na
        tej zasadzie wywoływania sztucznych podziałów między ludźmi i
        podburzania nas przeciwko sobie. Ich siłą i siłą obecnego systemu jest
        słabość PODZIELONEGO społeczeństwa.
        <p className="thicker">
          {" "}
          <br />
          Czas się zjednoczyć – bo to jedyna droga do zmiany tej chorej
          rzeczywistości.
        </p>{" "}
        <br />
        Tylko razem możemy odsunąć obecny, pookrągłostołowy układ od władzy, by
        cokolwiek mogło się w Polsce zmienić na lepsze.
        <br />
        Albo razem zrealizujemy choć jeden wspólny cel – albo nikt z nas osobno
        nie zrealizuje żadnego swojego celu czy postulatu.
      </p>
      <p>
        <br />
        Temu ma służyć ta strona, która pozwoli nam wszystkim{" "}
        <span className="thicker">
          połączyć siły, uzgodnić to co dla nas wszystkich oczywiste, że musi
          się w Polsce zmienić i wybrać spośród nas ludzi godnych zaufania,
          którzy będą nas reprezentować.
        </span>{" "}
        <br />
        <br />
        Tak odróżnimy ICH od NAS, naszych wrogów od naszych przyjaciół,
        dywersantów i sabotażystów od sprzymierzeńców:{" "}
        <span className="thicker">
          Wrogowie zawsze szukają i będą szukać różnic, żeby nas podzielić.
        </span>{" "}
        Bo tak realizują swoje własne interesy (indywidualne lub partyjne)
        naszym kosztem – siejąc podziały. I sprawa jest bardzo prosta: jeśli
        ktoś skupia się na tym co nas dzieli i co nas różni – zamiast szukać
        tego co nas łączy i widzieć to, że mamy wspólny interes w naprawie
        naszego państwa – to nie ma wątpliwości, że działa przeciwko nam,
        przeciwko społeczeństwu – i broni obecnego systemu realizując zasadę
        „dziel i rządź”
      </p>
      <h1>Zarejestruj się i podaj dalej</h1>
      <p>
        Rejestracja jest konieczna, żeby móc{" "}
        <span className="thicker">głosować</span> na postulaty i reprezentantów
        (oraz zarządzać swoimi głosami!).
        <br />
        Rejestracja jest również niezbędna żebyśmy{" "}
        <span className="thicker">nie stracili ze sobą kontaktu</span>, żebyśmy
        mieli własny<span className="thicker"> kanał komunikacyjny </span>
        niezależny od mediów – chodzi o to, żeby w nagłych przypadkach móc
        dotrzeć z ważną informacją do wszystkich poprzez e-mail. NIGDY tą drogą
        nie będą wysyłane żadne reklamy ani nic podobnego – wyłącznie ważne
        informacje niezbędne do odniesienia sukcesu tej inicjatywy. <br />
        Ponadto licznik na stronie głównej to{" "}
        <span className="thicker">licznik osób zarejestrowanych</span> – i
        najważniejsze jest to, żebyśmy widzieli wszyscy, że ten licznik rośnie z
        dnia na dzień, że jest nas coraz więcej. <br />
        <br />
        To co każdy z nas może zrobić – to zarejestrować się, wyrażać swoje
        poparcie dla wybranych postulatów i reprezentantów – oraz najważniejsze:
        <span className="thicker">przekazać dalej informację</span> o
        jednoczeniu się polskiego społeczeństwa w celu odsunięcia zdegenerowanej
        klasy politycznej od wpływu na nasze życie i odzyskania naszych
        pieniędzy (obniżenia podatków) zabieranych nam przez partie sejmowe pod
        różnymi pretekstami. Każdy może również zabiegać o poparcie dla
        postulatów, które uważa za słuszne oraz ludzi (reprezentantów), których
        uważa za godnych zaufania – podając bezpośrednie linki do stron
        konkretnych postulatów lub konkretnych reprezentantów – na każdej takiej
        stronie jest przycisk do głosowania i wyrażenia swojego poparcia.
      </p>
    </div>
  );
};

export default AboutPage;
