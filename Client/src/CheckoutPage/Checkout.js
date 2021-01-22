import React from 'react'

import Navbar from './Navbar'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import CheckoutLayout from './CheckoutLayout'

function Checkout(props) {
    let state = props.props.state
    return (
        <>
            <Navbar props={state} />
            <CheckoutLayout props={props.props} />
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Checkout
