import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {firstname: "",
            lastname: "",
            email: "",
            password: ""},
        errors: this.props.errors.session
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.body = document.querySelector("body");
  }

  componentDidMount() {
    this.setState({errors: []})
    document.querySelector("body").classList.add("background-content");
  }

  update(type) {
    return (e) => this.setState({ user: {[type]: e.target.value }});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.user);
    this.setState({ errors: this.props.errors.session });
  }

  togglePassword(e) {
    e.target.type = "password";
  }

  addValue(type) {
    return (e) => (e.target.value = this.state.user[type]);
  }

  render() {
    
    
    return (
      <div className="sign-in">
        <h2>Welcome to Chef's Table!</h2>
        <hr />
        {this.state.errors.length ? (
          <ul>
            {this.state.errors.map((error, idx) => (
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
            value={this.state.user.password}
            onClick={this.togglePassword}
            onChange={this.update("password")}
          />

          <br />
          <button className="form-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    document.querySelector("body").classList = "";
  }
}

export default SignupForm;
