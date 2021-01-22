import React from 'react'

import Navbar from './Navbar'
import CartLayout from './CartLayout'
import SocialMedia from '../HomePage/SocialMedia'
import Footer from '../HomePage/Footer'

const Cart = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='cart'>
            <Navbar props={props.props.state.totalQuantity} />
            <CartLayout props={props.props} />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Cart
