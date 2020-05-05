import React from "react";
import {Link} from "react-router-dom";
import {
  FaAngleDown
} from "react-icons/fa";


const Greeting = props =>{
    

    const loggedIn = () => {
        return (
          <div className="greeting-nav">
            <div className="dropdown">
              <p>Hi, {props.currentUser.firstname}!  <FaAngleDown/></p>
              <ul className="dropdown-menu">
                <Link to="users/:id">Reservations</Link>
                <li  onClick={props.logout}>Log Out</li>
              </ul>
            </div>
          </div>
        );
    }

    const notLoggedIn = ()=>{
        return (
            <nav className="greeting-nav">
                <Link id="nav-button" to="/signUp">Sign Up</Link>
                <br/>
                <Link to="/signIn">Sign In</Link>
            </nav>
        )
    }

    return props.currentUser ? loggedIn() :notLoggedIn();
}

export default Greeting;


