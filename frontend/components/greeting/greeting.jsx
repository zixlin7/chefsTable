import React from "react";
import {Link, Redirect} from "react-router-dom";
import {
  FaAngleDown
} from "react-icons/fa";

import {withRouter} from "react-router-dom"


class Greeting extends React.Component{
    constructor(props){
      super(props);
      this.state = {redirect: false};
      this.handleClick = this.handleClick.bind(this);
    }

    
    
    handleClick(e){
      e.preventDefault();
      this.props.fetchUser(this.props.currentUser.id)
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    render(){

      // if (this.state.redirect) return <Redirect to={this.state.redirect} />;
      const loggedIn = () => {
        return (
          <div className="greeting-nav">
            <div className="dropdown">
              <p>
                Hi, {this.props.currentUser.firstname}! <FaAngleDown />
              </p>
              <ul className="dropdown-menu">
                <a onClick={this.handleClick}>{/* <a to={`/users/${this.props.currentUser.id}`}> */}
                 Reservations
                </a>
                <li onClick={this.props.logout}>Log Out</li>
              </ul>
            </div>
          </div>
        );
      };

      const notLoggedIn = () => {
        return (
          <nav className="greeting-nav">
            <Link id="nav-button" to="/signUp">
              Sign Up
            </Link>
            <br />
            <Link to="/signIn">Sign In</Link>
          </nav>
        );
      };

      return this.props.currentUser ? loggedIn() : notLoggedIn();
    }
}

export default withRouter(Greeting);


