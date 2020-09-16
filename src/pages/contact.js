import React from 'react';
import Layout from '../components/layout'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <p className={contactStyles.container}>
                <p className={contactStyles.text}>Reach out</p>
                <p><a href='mailto:thetumblingwheels@gmail.com' target='_blank' rel='noreferrer'>email</a></p>
                <p><a href='https://www.facebook.com/thetumblingwheels'> facebook</a></p>
                <p><a href='https://www.instagram.com/thetumblingwheels/'> instagram</a></p>
            </p>
        </Layout>
    )
}

export default ContactPage;