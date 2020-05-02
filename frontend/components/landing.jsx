import React from "react";
import {updateSearch} from "../actions/search_actions";
import SearchForm from "../components/search/search_form";
const Landing = props => {
     const landingStyle = {
       backgroundImage: `url(${window.landingURL})`,
       height: '500px',
       width: '100%',
       backgroundSize: 'cover'
     }; 

    return (
      <div className="landing-box" style={landingStyle}>
        {/* <img id="landing-img" src={window.landingURL} /> */}
        <SearchForm updateSearch={updateSearch} />
      </div>
    );
}

export default Landing;