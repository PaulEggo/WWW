import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

function CheckoutLayout(props) {
    const { state, handleClear } = props.props

    const [credentials, setCredentials] = React.useState({
        firstname: '',
        email: '',
        address: '',
        city: '',
        area: '',
        zip: '',
        cardname: '',
        cardnumber: '',
        expmonth: '',
        expyear: '',
        cvv: '',
    })

    Modal.setAppElement('#root')

    const [modalState, setModalState] = React.useState({
        isModalOpen: false,
        message: '',
    })

    const [errorModalState, setErrorModalState] = React.useState({
        isModalOpen: false,
        message: '',
    })

    const handleClose = () => {
        setModalState({ ...modalState, isModalOpen: false })
    }
    const handleErrorClose = () => {
        setErrorModalState({ ...errorModalState, isModalOpen: false })
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            credentials.firstname &&
            credentials.email &&
            credentials.address &&
            credentials.city &&
            credentials.area &&
            credentials.zip &&
            credentials.cardname &&
            credentials.cardnumber &&
            credentials.expmonth &&
            credentials.expyear &&
            credentials.cvv
        ) {
            handleClear()
            setModalState({
                ...modalState,
                isModalOpen: true,
                message: 'Successful Order',
            })
        } else {
            setErrorModalState({
                ...errorModalState,
                isModalOpen: true,
                message: 'You must fill in all the fields!',
            })
        }
    }

    return (
        <section id='Ck' style={{ marginTop: '100px' }}>
            <Modal
                isOpen={modalState.isModalOpen}
                style={{
                    overlay: {},
                    content: {
                        top: '30%',
                        bottom: '50%',
                        right: '40%',
                        left: '40%',
                    },
                }}
            >
                <h1 style={{ textAlign: 'center' }}>{modalState.message}</h1>
                <Link to='/'>
                    <button
                        style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: '#34383c',
                            boxShadow: '2px 2px 30px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '20px',
                            marginTop: '20px',
                            color: '#fff',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            fontSize: '1rem',
                        }}
                        class='btn'
                        onClick={handleClose}
                    >
                        Back to Home
                    </button>
                </Link>
            </Modal>
            <Modal
                isOpen={errorModalState.isModalOpen}
                style={{
                    overlay: {},
                    content: {
                        top: '30%',
                        bottom: '50%',
                        right: '40%',
                        left: '40%',
                    },
                }}
            >
                <h1 style={{ textAlign: 'center' }}>
                    {errorModalState.message}
                </h1>
                <button
                    style={{
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#34383c',
                        boxShadow: '2px 2px 30px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '20px',
                        marginTop: '20px',
                        color: '#fff',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        fontSize: '1rem',
                    }}
                    class='btn'
                    onClick={handleErrorClose}
                >
                    Close
                </button>
            </Modal>
            <div class='row'>
                <div class='col-75'>
                    <div class='container'>
                        <form onSubmit={handleSubmit}>
                            <div class='row'>
                                <div class='col-50'>
                                    <h3>Billing Address</h3>
                                    <label for='fname'>
                                        <i class='fa fa-user'></i> Full Name
                                    </label>
                                    <input
                                        type='text'
                                        id='fname'
                                        name='firstname'
                                        placeholder='Κωσταντίνος Πολύζος'
                                        onChange={handleChange}
                                    />
                                    <label for='email'>
                                        <i class='fa fa-envelope'></i> Email
                                    </label>
                                    <input
                                        type='text'
                                        id='email'
                                        name='email'
                                        placeholder='lyz@gmail.com'
                                        onChange={handleChange}
                                    />
                                    <label for='adr'>
                                        <i class='fa fa-address-card-o'></i>{' '}
                                        Address
                                    </label>
                                    <input
                                        type='text'
                                        id='adr'
                                        name='address'
                                        placeholder='Παγασών 70'
                                        onChange={handleChange}
                                    />
                                    <label for='city'>
                                        <i class='fa fa-institution'></i> City
                                    </label>
                                    <input
                                        type='text'
                                        id='city'
                                        name='city'
                                        placeholder='Βόλος'
                                        onChange={handleChange}
                                    />

                                    <div class='row'>
                                        <div class='col-50'>
                                            <label for='area'>Area</label>
                                            <input
                                                type='text'
                                                id='area'
                                                name='area'
                                                placeholder='Θεσσαλία'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div class='col-50'>
                                            <label for='zip'>Zip</label>
                                            <input
                                                type='text'
                                                id='zip'
                                                name='zip'
                                                placeholder='36777'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class='col-50'>
                                    <h3>Payment</h3>
                                    <label for='fname'>Accepted Cards</label>
                                    <div class='icon-container'>
                                        <i
                                            class='fa fa-cc-visa'
                                            style={{ color: 'navy' }}
                                        ></i>
                                        <i
                                            class='fa fa-cc-amex'
                                            style={{ color: 'blue' }}
                                        ></i>
                                        <i
                                            class='fa fa-cc-mastercard'
                                            style={{ color: 'red' }}
                                        ></i>
                                        <i
                                            class='fa fa-cc-discover'
                                            style={{ color: 'orange' }}
                                        ></i>
                                    </div>
                                    <label for='cname'>Name on Card</label>
                                    <input
                                        type='text'
                                        id='cname'
                                        name='cardname'
                                        placeholder='Kostantinos Polyzos'
                                        onChange={handleChange}
                                    />
                                    <label for='ccnum'>
                                        Credit card number
                                    </label>
                                    <input
                                        type='text'
                                        id='ccnum'
                                        name='cardnumber'
                                        placeholder='1111-2222-3333-4444'
                                        onChange={handleChange}
                                    />
                                    <label for='expmonth'>Exp Month</label>
                                    <input
                                        type='text'
                                        id='expmonth'
                                        name='expmonth'
                                        placeholder='September'
                                        onChange={handleChange}
                                    />

                                    <div class='row'>
                                        <div class='col-50'>
                                            <label for='expyear'>
                                                Exp Year
                                            </label>
                                            <input
                                                type='text'
                                                id='expyear'
                                                name='expyear'
                                                placeholder='2026'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div class='col-50'>
                                            <label for='cvv'>CVV</label>
                                            <input
                                                type='text'
                                                id='cvv'
                                                name='cvv'
                                                placeholder='420'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <Link to='/Cart'>
                                            <button
                                                class='btn'
                                                style={{
                                                    marginRight: '30px',
                                                    marginLeft: '20px',
                                                }}
                                            >
                                                Return to Cart
                                            </button>
                                        </Link>
                                        <button class='btn' type='submit'>
                                            Confirm Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutLayout
