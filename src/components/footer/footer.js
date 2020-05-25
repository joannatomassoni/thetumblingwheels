import React from 'react';
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <p className={footerStyles.contact}>
            Booking: <a href='mailto:thetumblingwheels@gmail.com' target='_blank' rel='noreferrer'>thetumblingwheels@gmail.com</a>
        </p>
    )
}

export default Footer;