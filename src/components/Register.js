import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = {username: event.target['username'].value, password: event.targer['password'].value};
        //new FormData(event.target);
        console.log(data);

        fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    <Form.Group controlId="formBasicUsename">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Register">
                        Submit
                    </Button>
                </Form>
            </Container>

        )
    }
} */

export default function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target['username'].value;
        const password = event.target['password'].value;
        const data = JSON.stringify({
            username: username, 
            password: password 
        });
        console.log(data);
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }
    return (
        <Container>
                <Form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <Form.Group controlId="formBasicUsename">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Register">
                        Submit
                    </Button>
                </Form>
            </Container>
    )
}

