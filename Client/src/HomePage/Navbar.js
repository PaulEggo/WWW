import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <section id='nav-bar'>
            <nav class='navbar navbar-expand-lg navbar-light navbar-dark bg-dark'>
                <a class='navbar-brand' href='#top'>
                    Quinn
                </a>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>

                <div
                    class='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul class='navbar-nav ml-auto'>
                        <li class='nav-item'>
                            <a class='nav-link' href='#top'>
                                HOME
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#categories'>
                                CATEGORIES
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#about-us'>
                                ABOUT US
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#footer'>
                                CONTACT
                            </a>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' to='/Cart'>
                                <i class='fa' style={{ fontSize: '24px' }}>
                                    &#xf07a;
                                </i>
                                <span
                                    class='badge badge-warning'
                                    id='lblCartCount'
                                >
                                    {' '}
                                    {props.props}{' '}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
