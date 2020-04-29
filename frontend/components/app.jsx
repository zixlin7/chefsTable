import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Route} from "react-router-dom";
import SigninFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import {AuthRoute,ProtectedRoute} from "../util/route_util";
import RestaurantsIndexContainer from "./restaurants/restaurants_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container";

const App = () => (
  <div>
    <nav className="main-nav">
      <h1>Chef's Table</h1>
      <GreetingContainer />
    </nav>

    <AuthRoute exact path="/signIn" component={SigninFormContainer} />
    <AuthRoute exact path="/signUp" component={SignupFormContainer} />
    <Route exact path="/restaurants/:id" component={RestaurantShowContainer}/>
    <ProtectedRoute exact path="/restaurants" component={RestaurantsIndexContainer} />
  </div>
);

export default App;
