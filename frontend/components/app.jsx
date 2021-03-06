import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import CreateReservationContainer from './reservations/new_reservation_form_container';
import EditReservationContainer from './reservations/edit_reservation_container';
import CancelReservationContainer from './reservations/cancel_reservation_container';
import SearchContainer from '../components/search/search_container';
import Footer from './footer';
import UserContainer from './user/user_container';
import LandingContainer from './landing_container';
import NewReviewContainer from '../components/reviews/reviews_container';
import EditReviewContainer from '../components/reviews/edit_review_container';

const App = () => (
  <div id="main-div">
    <nav className="main-nav">
      <Link to="/">
        <div id="logo">
          {/* <h1 id="c">C</h1> */}
          <p>chef's</p>
          <p id="table">Table</p>
        </div>
      </Link>
      <GreetingContainer />
    </nav>
    <div className="main-content">
      <Route exact path="/" component={LandingContainer} />
      <AuthRoute exact path="/signIn" component={SigninFormContainer} />
      <AuthRoute exact path="/signUp" component={SignupFormContainer} />
      <ProtectedRoute
        exact
        path="/restaurants/:id"
        component={RestaurantShowContainer}
      />
      <ProtectedRoute exact path="/restaurants" component={SearchContainer} />
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
      <ProtectedRoute
        exact
        path="/restaurants/:id/reservations/cancel"
        component={CancelReservationContainer}
      />
      <ProtectedRoute exact path="/users/:id" component={UserContainer} />
      <ProtectedRoute
        exact
        path="/restaurants/:id/reviews/new"
        component={NewReviewContainer}
      />
      <ProtectedRoute
        exact
        path="/restaurants/:id/reviews/:reviewId/edit"
        component={EditReviewContainer}
      />
    </div>

    <Footer />
  </div>
);

export default App;
