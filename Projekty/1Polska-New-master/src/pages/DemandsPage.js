import React from "react";
import values from "../components/coordinators.json";
import reps from "../components/representatives.json";
import demands from "../components/demands.json";
import "../styles/repBox.scss";
import "../styles/PagesStyles/RepresentativesPage.scss";

class DemandsPage extends React.Component {
  state = {
    selectOptions: [],
    description: "",
    area: "0",
    tags: "",
    demands: []
  };

  componentWillMount = () => {
    let selectOptions = [];
    for (let i = 1; i <= 41; i++) {
      const cityValues = values[i];
      selectOptions.push(i + " - " + cityValues.city);
    }
    this.setState({ selectOptions });

    let listing = [];
    reps.coordinators.forEach(element => {
      listing.push(element);
    });
    this.setState({ listing });
  };

  componentDidMount = () => {
    const listingArray = this.state.listing;
    listingArray.forEach(element => {
      return console.log(element.id);
    });
  };

  render() {
    const selectCities = this.state.selectOptions.map(option => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });

    const demandsList = demands.demands.map(demand => {
      return (
        <div className="repBox" key={demand}>
          <div className="repDetails">
            <div className="repDetails-top">
              <div className="repDetails-top-left">
                <div>{demand.name}</div>
              </div>
            </div>
            <div className="repDetails-bottom">{demand.shortDescription}</div>
          </div>
          <div className="repDetails-right">
            {/*<div className="repDetails-top-right">
            Dodano {hardcodedDem.dateAdded}
          </div>*/}
            <div class="votingBox">
              <i class="fas fa-vote-yea"></i>
              <div className="votingBoxText">Popieram!</div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="representativesPage">
        <h1>Postulaty</h1>
        <div className="searchBox">
          <div className="nameSearch">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Szukaj w opisie..."
            />
          </div>

          <select>
            <option value="0">Wybierz okręg</option>
            {selectCities}
          </select>

          <div className="tagsSearch">
            <input type="text" name="tags" id="tags" placeholder="Tagi" />
          </div>
          <div className="searchButton">
            <i className="fas fa-search" /> {` Szukaj`}
          </div>
        </div>

        <div className="repBox-container">{demandsList}</div>
      </div>
    );
  }
}

export default DemandsPage;
