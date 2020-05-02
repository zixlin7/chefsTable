import React from "react";
import updateSearch from "../actions/search_actions";
import SearchForm from "../components/search/search_form";
const Landing = props => {
    return (
      <div className="landing-box">
        <img id="landing-img" src={window.landingURL} />
        <SearchForm updateSearch={updateSearch} />
      </div>
    );
}

export default Landing;