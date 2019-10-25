import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:4000/users', {
            method: 'POST',
            body: data,
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign in</h3>
                <input type="text" name="username" placeholder="enter you username" />
                <input type="password" name="password" placeholder="enter password" />
                <input type="submit" value="Login" />
            </form>
        )
    }
}

