import React from 'react'

import '../index.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Categories from './Categories'
import AboutUs from './AboutUs'
import SocialMedia from './SocialMedia'
import Footer from './Footer'

const Home = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className='home'>
            <Navbar props={props.props.totalQuantity} />
            <Banner />
            <Categories />
            <AboutUs />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Home
