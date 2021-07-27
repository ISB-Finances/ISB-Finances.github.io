import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passRef = useRef()
    const cpassRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        if (passRef.current.value !== cpassRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        if (emailRef.current.value !== currentUser.password) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passRef.current.value) {
            promises.push(updatePassword(passRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/budgeting-hub')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

       
    }
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Update Profile</h2>
               {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                   
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passRef} placeholder = "Leave blank to keep the same"/>
                    </Form.Group>
                    <Form.Group id="confirm-pass">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={cpassRef} placeholder = "Leave blank to keep the same"/>
                    </Form.Group>
                    <Button disabled ={loading} className="w-100" type = "submit">Update Profile</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
           <Link to="/budgeting-hub">Cancel</Link>
        </div>
        </div>
    )
}