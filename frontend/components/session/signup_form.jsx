import React from "react";
import { Link } from "react-router-dom";
import Landing from "../landing";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "", 
      email: "", 
      password: "" ,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    // this.body = document.querySelector("body");
  }

  componentDidMount() {
    this.props.clearErrors();
    document.getElementById("darken").classList.add("modal-background");
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
    
  }

  togglePassword(e) {
    e.target.type = "password";
  }

  demo(e) {
    e.preventDefault();
    this.props.login({ email: "demo1@user.com", password: "123456" });
  }

  addValue(type) {
    return (e) => (e.target.value = this.state[type]);
  }

  render() {
      const errors = this.props.errors.session;
    return (
      <div>
          <Landing/>
          <div id="darken"></div>
          <div className="sign-in">
            <span className="close" onClick={this.close}>&times;</span>
            <h2>Welcome to Chef's Table</h2>
            <hr />
            {errors.length ? (
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
            ) : null}

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name *"
                onClick={this.addValue("firstname")}
                onChange={this.update("firstname")}
              />

              <input
                type="text"
                placeholder="Last Name *"
                onClick={this.addValue("lastname")}
                onChange={this.update("lastname")}
              />

              <input
                type="text"
                placeholder="Enter email *"
                onClick={this.addValue("email")}
                onChange={this.update("email")}
              />

              <br />
              <input
                type="text"
                placeholder="Enter password *"
                value={this.state.password}
                onClick={this.togglePassword}
                onChange={this.update("password")}
              />

              <br />
              <button className="form-button" type="submit">
                Sign Up
              </button>
              <button className="form-button" onClick={this.demo}>
                Demo User
              </button>
            </form>
          </div>
        </div >
    );
  }

  componentWillUnmount() {
    
  }
}

export default SignupForm;
