import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import {useAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'


export default function Login () {
    const emailRef = useRef()
    const passRef = useRef()
    const {login} = useAuth()
    const history = useHistory()
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)

           await login(emailRef.current.value, passRef.current.value)
            history.push('/budgeting-hub')
        } catch {
        setError("Failed to sign in")
        }
        setLoading(false)
    }
    return (
        <div>        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Login</h2>
               {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passRef} required />
                    </Form.Group>
                    <Button disabled ={loading} className="w-100" type = "submit">Login</Button>
                </Form>
                <div className="w-100 txt-center mt-3">
                    <Link to="/budgeting-hub/forgot-password">Forgot Password</Link> 
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/budgeting-hub/signup">Sign Up </Link>
        </div>
        </div>
    )
}