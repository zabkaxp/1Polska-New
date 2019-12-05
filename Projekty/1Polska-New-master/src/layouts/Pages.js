import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage";
import DemandsPage from "../pages/DemandsPage";
import RepresentativesPage from "../pages/RepresentativesPage";
import RepresentativePage from "../pages/RepresentativePage";

import AreaPage from "../pages/AreaPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
//import ErrorPage from "../pages/ErrorPage";
import PageInformation from "../pages/PageInformation";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FeedbackPage from "../pages/FeedbackPage";
import ScrollToTop from "../components/ScrollToTop";
import ForgottenPassword from "../pages/ForgotPassword";
import RegulationsPage from "../pages/RegulationsPage";

const Pages = () => {
  return (
    <div class="pages">
      <ScrollToTop />
      <Switch>
        <Route path="*/o_co_chodzi" exact component={AboutPage} />
        <Route path="*/postulaty" exact component={DemandsPage} />
        <Route path="*/reprezentanci" exact component={RepresentativesPage} />

        <Route path="*/kontakt" exact component={ContactPage} />
        <Route path="*/zaloguj" exact component={LoginPage} />
        <Route
          path="*/informacje_o_stronie"
          exact
          component={PageInformation}
        />
        <Route path="*/polityka_prywatnosci" exact component={PrivacyPolicy} />

        <Route path="*/regulamin" exact component={RegulationsPage} />

        <Route path="*/feedback" exact component={FeedbackPage} />
        <Route path="*/odzyskaj_haslo" exact component={ForgottenPassword} />
        <Route path="*/reprezentanci/:id" component={RepresentativePage} />
        <Route path="*/okregi/:id" component={AreaPage} />
        <Route path="/1Polska-New" component={HomePage} />
        <Route path="/" component={HomePage} />
        {/*just to publish it on the gh pages i have to take out the error page as gh recognizes it as front page. For deployment 
        add error route and path to homepage must be set as exact <Route component={ErrorPage} /> */}
      </Switch>
    </div>
  );
};

export default Pages;
