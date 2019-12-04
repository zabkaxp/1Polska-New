import React from "react";
import meetings from "../../components/meetings.json";
import "../../styles/HomePageStyles/highlights.scss";
import "../../components/counter.js";

class Highlights extends React.Component {
  render() {
    const soonestMeetings = meetings.meetings.map(meeting => {
      return (
        <div class="meeting-box">
          <div className="meeting-addressFull">
            <span className="meeting-city">{meeting.city}</span>
            <span className="meeting-address">{meeting.address}</span>
          </div>
          <span className="meeting-date">{meeting.date}</span>
        </div>
      );
    });
    return (
      <div class="highlights">
        <div class="highlights-container">
          <div class="highlights-slogans">
            <div class="czas-zjednoczyc slogan">
              Czas zjednoczyć ludzi wobec patologii systemu!
            </div>
            <div class="chcesz-zyc slogan">
              Chcesz żyć w normalnym kraju? Masz dość absurdów IIIRP?
            </div>
            <div class="nie-jestes slogan">Nie jesteś sam! Jest nas już:</div>
            <div class="counter-text slogan counter">
              <span
                id="scrollzipPoint"
                class="numscroller timer"
                data-min="1"
                data-max="36574"
                data-delay="5"
                data-increment="80"
              >
                36574
              </span>
            </div>
            <div class="highlights-text">
              To my, polskie społeczeństwo, które ma już dość tego chorego
              systemu, jaki stworzyły nam tzw. "elity IIIRP".
              Pookrągłostołowemu, zabetonowanemu układowi partyjnemu i obecnej
              klasie politycznej już dziękujemy! Dość hipokryzji, obłudy i
              zakłamania polityków oraz mediów. Tu ustalimy wspólnie priorytety
              zmian i wreszcie połączymy siły żeby przywrócić w Polsce
              normalność. To my: normalni, zwykli ludzie chcący żyć uczciwie i
              godnie jesteśmy w Polsce większością - i czas to sobie uświadomić!
            </div>
          </div>
        </div>
        <div class="highlights-meetings-container">
          <h1 class="soonest-meeting-text">
            Najbliższe <span className="separateLine">spotkania</span>
          </h1>
          <div class="soonest-meetings">{soonestMeetings}</div>
        </div>
      </div>
    );
  }
}

export default Highlights;
