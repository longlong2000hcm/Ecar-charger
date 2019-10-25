import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
    var error = null;
    if (props.stateWrongUsernameOrPass === true) { var error = <div>Wrong username or password</div>; }
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target['username'].value;
        const password = event.target['password'].value;
        const data = JSON.stringify({
            "username": username,
            "password": password
        });
        
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

        }).then(res => res.json()).then(res => {
            if (res.sucess===true) {
                props.loginToken(res.token,username);
                props.history.push('/');
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Form.Group controlId="formBasicUsename">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Login">Login</Button>
                <Button className="mx-2 btn-secondary" onClick={() => props.history.goBack()}>
                    Back
                </Button>
            </Form>
            {error}
        </Container>
    )
}

