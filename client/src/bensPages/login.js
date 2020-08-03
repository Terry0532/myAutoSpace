import React, { Component } from "react";
import './login.css';
import API from "../utils/API";
import FormInput from "../components/formInput/formInput";
import FormInputButton from "../components/formInputButton/FormInputButton";
import { withRouter } from "react-router-dom";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";
import { AuthContext } from "../utils/authContext";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            id: ""
        };
    };
    static contextType = AuthContext;

    handleFormSubmit = (e) => {
        e.preventDefault();

        let user = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        }
        if (!this.state.email || !this.state.password) {
            return;
        }
        API.loginUser(user)
            .then((res) => {
                this.props.history.push("/Members")
            })
            .catch(err => {
                console.log(err);
            })
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.type;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        }); if (!this.state.email || !this.state.password) {
            return;
        }
    };

    render() {
        return (
            <div>
                <br />
                <Card>
                    <Header className={"hero text-center"} value={"Login Page"} />
                </Card>
                <br />
                <Card>
                    <Header value={"Welcome to CarFacts!"} className={"title"} />
                    <br />
                    <Subtitle value={"CarFacts is your all-in-one app to track all maintenance and modifications done to your vehicle."}
                        className={"subtitle"} />
                    <Subtitle value={"If this is your first time here, click sign up and add your first vehicle!"}
                        className={"subtitle"} />
                </Card>
                <br />
                <br />
                <Card title="Login Page">
                    <form className="login">
                        <FormInput className={"style"} handleInputChange={this.handleInputChange} value={this.state.email} htmlFor="exampleInputEmail1" id="emailInput" placeholder="User@email.com" type="email">Email address:</FormInput>
                        <FormInput handleInputChange={this.handleInputChange} value={this.state.password} htmlFor="exampleInputEmail1" id="passwordInput" placeholder="Password" type="password">Password</FormInput>
                        <FormInputButton handleFormSubmit={this.handleFormSubmit}>Login</FormInputButton>
                    </form>
                </Card>
            </div>
        );
    }
}
export default withRouter(Login);