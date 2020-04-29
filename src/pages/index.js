import React from "react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import FooterButtons from '../components/footerButtons'
import Footer from '../components/footer'

export default () =>  { 
    return (
        <Layout>
            <Banner/>
            <FooterButtons/>
            <Footer />
        </Layout>
    )
}