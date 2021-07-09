import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passRef = useRef()
    const cpassRef = useRef()
    const {signup} = useAuth()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault()
        if (passRef.current.value !== cpassRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError('')
            setLoading(true)

           await signup(emailRef.current.value, passRef.current.value)
            history.push('/budgeting-hub')
        } catch {
        setError("Failed to create an account")
        }
        setLoading(false)
    }
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Sign Up</h2>
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
                    <Form.Group id="confirm-pass">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={cpassRef} required />
                    </Form.Group>
                    <Button disabled ={loading} className="w-100" type = "submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/budgeting-hub/login">Login</Link>
        </div>
        </div>
    )
}