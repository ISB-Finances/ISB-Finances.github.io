import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='budgeting-hub'>
            <button className='btn'> Budgeting Hub

            </button>
        </Link>
    );
}