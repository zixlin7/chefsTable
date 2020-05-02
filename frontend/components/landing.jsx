import React from "react";
import {updateSearch} from "../actions/search_actions";
import SearchForm from "../components/search/search_form";
const Landing = props => {
     const landingStyle = {
       backgroundImage: `url(${window.landingURL})`,
       height: '500px',
       width: '100%',
       backgroundSize: 'cover',
       position: 'relative',
       zIndex: '1'
     }; 

    return (
      <div className="landing-box" style={landingStyle}>
        <div className="overlay">
          <div className="landing-content">
            <h1> Find your next table</h1>
            <SearchForm updateSearch={updateSearch} />
          </div>
        </div>
      </div>
    );
}

export default Landing;