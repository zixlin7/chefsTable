import React from "react";
import {Link} from "react-router-dom"

class SigninForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        
    }

    componentDidMount(){
        document.querySelector("body").classList.add("background-content");
    }

    update(type){
        return e=> this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
        
    }

    demo(e){
        e.preventDefault();
        this.props.login({email: "demo1@user.com", password: "123456"})
    }

    render(){
        
        const errors = this.props.errors.session;
        return (
          
            <div className="sign-in">
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
        );
    }

    componentWillUnmount(){
        document.querySelector("body").classList = "";
    
    }
    
}

export default SigninForm;