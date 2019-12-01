import React from "react";

import { NavLink } from "react-router-dom";
import "../../styles/HomePageStyles/poll.scss";
//

const Poll = () => {
  return (
    <div className="poll">
      <div className="poll-container">
        <div className="poll-header">Głosowanie na dziś</div>
        <div className="poll-question-box">
          <div className="poll-question">
            Czy uważasz, że zagraniczne korporacje powinny płacić podatki w
            Polsce?
          </div>
          <div className="poll-answers-box">
            <div className="poll-answer poll-answer-yes">TAK</div>
            <div className="poll-answer poll-answer-no">NIE</div>
          </div>
        </div>
        <div className="poll-go-to-all">
          <NavLink className="postulatyBreadcrumb" to="/postulaty">
            &#8594; Przejdź do wszystkich głosowań
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Poll;
