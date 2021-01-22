import React from 'react'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'

const CartLayout = (props) => {
    let { state, handleRemove, handleToggle, handleClear } = props.props
    return (
        <div class='small-container cart-page'>
            <table>
                <tr>
                    <th>
                        <h5>Product</h5>
                    </th>
                    <th>
                        <h5>Quantity</h5>
                    </th>
                    <th>
                        <h5>Subtotal</h5>
                    </th>
                </tr>
                {state.cart.map((item) => {
                    return (
                        <CartItem props={[item, handleRemove, handleToggle]} />
                    )
                })}
            </table>

            <div class='total'>
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>
                            <h6>${state.totalPrice}</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>
                            <h6>${(state.totalPrice * 0.24).toFixed(2)}</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>
                            <h4>
                                $
                                {(
                                    state.totalPrice +
                                    state.totalPrice * 0.24
                                ).toFixed(2)}
                            </h4>
                        </td>
                    </tr>
                </table>
            </div>

            <div class='checkout'>
                <button
                    class='checkout-btn'
                    style={{ marginRight: '50px' }}
                    onClick={handleClear}
                >
                    Clear Cart
                </button>
                <Link to='/Checkout'>
                    <button class='checkout-btn'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default CartLayout
