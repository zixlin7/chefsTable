import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Route} from "react-router-dom";
import SigninFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import {AuthRoute,ProtectedRoute} from "../util/route_util";
import RestaurantShowContainer from "./restaurants/restaurant_show_container";
import CreateReservationContainer from "./reservations/new_reservation_form_container";
import EditReservationContainer from "./reservations/edit_reservation_container";
import Landing from "./landing"
import SearchContainer from "../components/search/search_container";

const App = () => (
  <div className="main-div">
    <nav className="main-nav">
      <div id="logo">
        {/* <h1 id="c">C</h1> */}
        <p>chef's</p>
        <p id="table">Table</p>
      </div>
      <GreetingContainer />
    </nav>

    <Route exact path="/" component={Landing} />
    <AuthRoute exact path="/signIn" component={SigninFormContainer} />
    <AuthRoute exact path="/signUp" component={SignupFormContainer} />
    <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
    <ProtectedRoute
      exact
      path="/restaurants"
      component={SearchContainer}
    />
    <ProtectedRoute
      exact
      path="/restaurants/:id/reservations/new"
      component={CreateReservationContainer}
    />
    <ProtectedRoute
      exact
      path="/restaurants/:id/reservations/edit"
      component={EditReservationContainer}
    />
  </div>
);

export default App;
