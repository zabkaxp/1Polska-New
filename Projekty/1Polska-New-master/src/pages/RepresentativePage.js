import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PagesStyles/RepresentativePage.scss";
import reps from "../components/representatives.json";

class RepresentativePage extends React.Component {
  state = {
    repId: "",
    currentRep: ""
  };
  componentWillMount = () => {
    const repId = this.props.match.params.id;
    this.setState({
      repId
    });
  };

  componentDidMount = () => {
    const repDetails = reps.coordinators.filter(
      currentRep => currentRep.id === this.state.repId
    );
    this.setState({
      currentRep: repDetails[0]
    });
  };
  render() {
    const currentRep = this.state.currentRep;
    return (
      <div className="representativeContainer">
        <section className="representativeContainer-left">
          <img
            className="currentRepPicture"
            src={currentRep.picture}
            alt="represantative"
          ></img>
        </section>
        <section className="representativeContainer-right"></section>
      </div>
    );
  }
}

export default RepresentativePage;
