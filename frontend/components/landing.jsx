import React from "react";
import {updateSearch} from "../actions/search_actions";
import SearchForm from "../components/search/search_form";
import {Redirect} from "react-router-dom"
import TrendingIndex from "./trending_index"
class Landing extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state={redirect: null}
  }

  componentDidMount(){
    this.props.requestRestaurants(this.props.search)
  }

  handleClick(e){
    e.preventDefault()
    this.props.requestRestaurants(this.props.search)
    this.setState({redirect: "/restaurants"})
  }
  render(){
    if (this.state.redirect)
      return <Redirect to={this.state.redirect} />;
     const landingStyle = {
       backgroundImage: `url(${window.landingURL})`,
     }; 

    return (
      <div>
        <div className="landing-box" style={landingStyle}>
          <div className="overlay" >
            <div className="landing-content">
              <h1> Find your next table</h1>
              <div className="search-bar">
                <SearchForm updateSearch={this.props.updateSearch} search={this.props.search} />
                <a onClick={this.handleClick}>Discover</a>
              </div>
            </div>
          </div>
        </div>
        <TrendingIndex restaurants={this.props.restaurants} requestRestaurant={this.props.requestRestaurant}/>
      </div>
    )
  };
}

export default Landing;