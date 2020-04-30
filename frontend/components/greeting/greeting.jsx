import React from "react";
import {Link} from "react-router-dom";


const Greeting = props =>{
    

    const loggedIn = () => {
        return (
          <div className="greeting-nav">
            <p>Hi, {props.currentUser.firstname}!</p>
            <button id="logout-button" onClick={props.logout}>
              Log Out
            </button>
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


