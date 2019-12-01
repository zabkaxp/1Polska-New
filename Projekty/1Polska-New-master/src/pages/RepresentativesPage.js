import React from "react";
import values from "../components/coordinators.json";
import reps from "../components/representatives.json";
import "../styles/repBox.scss";
import "../styles/PagesStyles/RepresentativesPage.scss";

class RepresentativesPage extends React.Component {
  state = {
    selectOptions: [],
    name: "",
    surname: "",
    area: "0",
    tags: "",
    representatives: []
  };

  componentWillMount = () => {
    let selectOptions = [];
    for (let i = 1; i <= 41; i++) {
      const cityValues = values[i];
      selectOptions.push(i + " - " + cityValues.city);
    }
    this.setState({ selectOptions });
  };

  handleChange = e => {
    let stateElement = e.target.name;

    this.setState({
      stateElement: e.target.value
    });
  };
  render() {
    const hardcodedRep = reps.coordinators[1];
    const hardcodedRep2 = reps.coordinators[2];
    const selectCities = this.state.selectOptions.map(option => {
      return <option value={option}>{option}</option>;
    });
    return (
      <div className="representativesPage">
        <h1>Reprezentanci</h1>
        <div className="searchBox">
          <div className="nameSearch">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Imię"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="surnameSearch">
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Nazwisko"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </div>

          <select value={this.state.area} onChange={this.handleChange}>
            <option>Wybierz okręg</option>
            {selectCities}
          </select>

          <div className="tagsSearch">
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Tagi"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>
          <div className="searchButton" onClick={() => this.searchForReps}>
            <i className="fas fa-search" /> {` Szukaj`}
          </div>
        </div>
        <div className="repBox-container">
          <div className="repBox">
            <img
              className="repPicture"
              src={hardcodedRep.picture}
              alt="represantative"
            ></img>

            <div className="repDetails">
              <div className="repDetails-top">
                <div className="repDetails-top-left">
                  <div>{hardcodedRep.name}</div>
                  <div>Okręg numer {hardcodedRep.area}</div>
                </div>
                <div className="repDetails-top-right">
                  Dołączono {hardcodedRep.registrationDate}
                </div>
              </div>
              <div className="repDetails-bottom">
                {hardcodedRep.shortDescription}
              </div>
            </div>
          </div>
          <div className="repBox">
            <img
              className="repPicture"
              src={hardcodedRep2.picture}
              alt="represantative"
            ></img>

            <div className="repDetails">
              <div className="repDetails-top">
                <div className="repDetails-top-left">
                  <div>{hardcodedRep2.name}</div>
                  <div>Okręg numer {hardcodedRep2.area}</div>
                </div>
                <div className="repDetails-top-right">
                  Dołączono {hardcodedRep2.registrationDate}
                </div>
              </div>
              <div className="repDetails-bottom">
                {hardcodedRep2.shortDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepresentativesPage;
