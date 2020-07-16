import React from "react";
import {Link, Redirect} from "react-router-dom"
import Landing from "../landing";

class SigninForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
        document.getElementById("darken").classList.add("modal-background");  
    }

    update(type){
        return e=> this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login({ email, password })
    }

    close(){
        this.setState({ redirect: '/' });
    }

    demo(e){
        e.preventDefault();
        this.props.login({email: "demo1@user.com", password: "123456"})
    }

    render(){
        if(this.state.redirect) 
            return <Redirect to={this.state.redirect} />;
        const errors = this.props.errors.session;
        const landingStyle = {
            backgroundImage: `url(${window.landingURL})`,
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: '1'
        }; 
        return (
        <div>
            {/* <Landing />  */}
            <div className="landing-box" style={landingStyle}></div>
            <div id="darken"></div>
            <div className="sign-in-box">
                <div className="sign-in">
                    <button className="close" onClick={this.close}>&times;</button>
                    <h2>Please sign in</h2>
                    <hr/>
                    {errors.length
                    ? (<ul>
                        {errors.map((error, idx) =>(
                            <li key={idx}>{error}</li>
                        ))}
                        </ul>) 
                    : null}
                    
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Email:
                        <br/>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                        </label>
                        <br />
                        <label>
                        Password:
                        <br/>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                        </label>
                        <br/>
                        <button className="form-button" type="submit">Sign In</button>
                        <button className="form-button" onClick={this.demo}>Demo User</button>

                        <div>
                            <p>New to Chef's Table?</p>
                            <Link to="/signUp">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }

    componentWillUnmount(){
        
    
    }
    
}

export default SigninForm;