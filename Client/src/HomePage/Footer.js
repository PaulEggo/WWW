import React from 'react'

const Footer = () => {
    return (
        <section id='footer'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-4 footer-box'>
                        <h4>Quinn</h4>
                        <p>
                            Many brands featuring hoodies, jackets, trousers and
                            a lot more
                        </p>
                    </div>
                    <div class='col-md-4 footer-box'>
                        <p>
                            <b>CONTACT US</b>
                        </p>
                        <p>
                            <i class='fa fa-map-marker'></i> Xatziargiri 1,
                            Volos
                        </p>
                        <p>
                            <i class='fa fa-phone'></i> 6989403264
                        </p>
                        <p>
                            <i class='fa fa-envelope-o'></i>{' '}
                            PaulEggo1999@gmail.com
                        </p>
                    </div>
                    <div class='col-md-4 footer-box'>
                        <p>
                            <b>SUBSCRIBE NEWSLETTER</b>
                        </p>
                        <input
                            type='email'
                            class='form-control'
                            placeholder='emample@mail.com'
                        />
                        <button type='button' class='btn btn-prim'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div>
                    <hr />
                    <p class='copyright'>Website Crafted by Aκατάλληλοι</p>
                </div>
            </div>

            <script src='smouth-scroll.js'></script>
            <script>var scroll = new SmoothScroll('a[href*="#"]');</script>
        </section>
    )
}

export default Footer
