import React from "react";
import {updateSearch} from "../actions/search_actions";
import SearchForm from "../components/search/search_form";
import {Link} from "react-router-dom"
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
        <div className="overlay" >
          <div className="landing-content">
            <h1> Find your next table</h1>
            <div className="search-bar">
              <SearchForm updateSearch={updateSearch} />
              <Link to="/restaurants">Discover</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;