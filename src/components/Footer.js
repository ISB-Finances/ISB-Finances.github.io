import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Have any questions or concerns?
                </p>
                <p className='footer-subscription-text'>
                    You can always reach out to us.
                    <br></br>
                    <br></br>
                    <a href="mailto:[isb.finances@gmail.com]">Email us</a> at anytime! 
                </p>
            </section>
            <p className='website-rights'> © ISB 2021 </p>
        </div>
    )
}

export default Footer

