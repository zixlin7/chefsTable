import React from "react";
import {Link} from "react-router-dom";


const Greeting = props =>{
    

    const loggedIn = () => {
        return (
            <div>
                <p>Hi, {currentUser.firstname}!</p>
                <button onClick={props.logout}>Log Out</button>
            </div>
        )
    }

    const notLoggedIn = ()=>{
        return (
            <nav>
                <Link to="/signUp">Sign Up</Link>
                <br/>
                <Link to="/signIn">Sign In</Link>
            </nav>
        )
    }

    return props.currentUser ? loggedIn() :notLoggedIn();
}

export default Greeting;


