import React from "react";
import values from "../components/coordinators.json";
import "../styles/PagesStyles/RepresentativePage.scss";

class RepresentativesPage extends React.Component {
  state = {
    areaNumber: "",
    city: "",
    regionCoordinators: "",
    demands: ""
  };
  componentWillMount = () => {
    const areaNumber = this.props.match.params.id;
    this.setState({
      areaNumber
    });
  };
  componentDidMount = () => {
    const region = values[this.state.areaNumber];
    const city = region.city;
    const regionCoordinators = region.coordinators.map(coordinator => {
      const mailing = `mailto:${coordinator.email}?Subject=1Polska`;
      const totalSupport =
        parseInt(coordinator.positives) + parseInt(coordinator.negatives);
      const positivePercentage = Math.round(
        (parseInt(coordinator.positives) / totalSupport) * 100
      );
      const negativePercentage = Math.round(
        (parseInt(coordinator.negatives) / totalSupport) * 100
      );
      return (
        <section key={coordinator.email} className="regionCoordinatorBox ">
          <div className="coordinatorName">{coordinator.name}</div>
          <div className="coordinatorEmail">
            <a href={mailing}>{coordinator.email}</a>
          </div>
          {coordinator.phone && (
            <div className="coordinatorPhone">tel: {coordinator.phone}</div>
          )}
          {positivePercentage > 1 || negativePercentage > 1 ? (
            <div className="supportBox">
              <div class="supportBoxPositive supportBoxWidth">
                <div>
                  <i class="far fa-thumbs-up" /> {positivePercentage} %{" "}
                </div>
              </div>
              <div class="supportBoxNegative supportBoxWidth">
                <div>
                  <i class="far fa-thumbs-down" /> {negativePercentage}%{" "}
                </div>
              </div>
            </div>
          ) : (
            undefined
          )}
        </section>
      );
    });
    this.setState({ regionCoordinators, city });
    //console.log(region);
  };

  render() {
    console.log(this.state.areaNumber);
    return (
      <div>
        <h1>
          Okręg numer {this.state.areaNumber} - {this.state.city}
        </h1>
        <h2>Reprezentanci:</h2>

        <div className="coordinatorsBox heightStyles">
          {this.state.regionCoordinators}
        </div>
        <h2>Postulaty:</h2>
        <div className="coordinatorsBox heightStyles">
          {this.state.demands
            ? undefined
            : "Brak postulatów przypisanych do tego okręgu."}
        </div>
      </div>
    );
  }
}

export default RepresentativesPage;
