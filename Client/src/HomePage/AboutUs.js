import React from 'react'

const AboutUs = () => {
    return (
        <section id='about-us'>
            <div class='container'>
                <h1 class='title text-center'>WHY CHOOSE US ?</h1>
                <div class='row'>
                    <div class='col-md-6 about-us'>
                        <p class='about-us-title'>Why are we different?</p>
                        <ul>
                            <li>Good prices all year long</li>
                            <li>Variety of products</li>
                            <li>All new collections</li>
                            <li>Fast delivery</li>
                            <li>Wordlwide delivery</li>
                            <li>Easy to find anything you need</li>
                        </ul>
                    </div>
                    <div class='col-md-6'>
                        <img
                            src='https://www.breakersfwb.com/wp-content/uploads/2018/10/pexels-photo-1345082-1.jpeg'
                            class='img-fluid'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
