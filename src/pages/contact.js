import React from 'react';
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <p className={contactStyles.mainText}>Please reach out at <a href='mailto:thetumblingwheels@gmail.com'>thetumblingwheels@gmail.com</a>,</p>
            <p className={contactStyles.mainTextTwo}>or find us on <a href='https://www.facebook.com/thetumblingwheels'>Facebook</a> or <a href='https://www.instagram.com/thetumblingwheels/'>Instagram.</a></p>
        </Layout>
    )
}

export default ContactPage;