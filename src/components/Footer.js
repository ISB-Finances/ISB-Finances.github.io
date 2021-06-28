import React from 'react';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the the email list!
                </p>
                <p className='footer-subscription-text'>
                    You can always unsubscribe.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Your email"
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div> 
            </section>
                <p className='website-rights'> © ISB 2021 </p>
        </div>
    )
}

export default Footer
