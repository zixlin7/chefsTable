import React from "react";
import {Link, Redirect} from "react-router-dom";
import {
  FaAngleDown
} from "react-icons/fa";


class Greeting extends React.Component{
    constructor(props){
      super(props);
      this.state = {redirect: false};
      // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

      this.props.fetchUser(this.props.currentUser.id)
    }

    // handleClick(e){
    //   e.preventDefault();
    //   this.setState({ redirect: `/users/${this.props.currentUser.id}` });
    // }

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
                <Link to={`/users/${this.props.currentUser.id}`}>
                 Reservations
                </Link>
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

export default Greeting;


