import React from 'react';
import { Link, Form, Button } from 'react-bootstrap';
import './LoginForm.css'

function LoginForm() {
    return (
        <div>
            <div>
            <Form>
                <Form.Group className="formBox" controlId="formBasicEmail">
                    <Form.Label className="labelName">Email address</Form.Label>
                    <Form.Control className="formControl" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="formBox" controlId="formBasicPassword">
                    <Form.Label className="labelName">Password</Form.Label>
                    <Form.Control className="formControl" type="password" placeholder="Password" />
                </Form.Group>
                <button className="buttonLogin">Login</button>
            </Form>
            </div>
        </div>
            
            
        
    )
}

export default LoginForm;