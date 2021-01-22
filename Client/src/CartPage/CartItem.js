import React from 'react'

function CartItem(props) {
    let { id, imgURL, Name, Price, Quantity } = props.props[0]
    let handleRemove = props.props[1]
    let handleToggleParent = props.props[2]

    const handleToggle = (e) => {
        handleToggleParent(id, e.target.value)
    }

    return (
        <tr key={id}>
            <td>
                <div class='cart-info'>
                    <img src={imgURL} alt='' />
                    <div>
                        <br />
                        <h4>{Name}</h4>
                        <h6>Price: ${Price}.00</h6>
                        <button
                            class='checkout-btn'
                            style={{ width: '100px' }}
                            onClick={() => {
                                handleRemove(id)
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <input type='number' value={Quantity} onChange={handleToggle} />
            </td>
            <td>
                <h6>${Price * Quantity}.00</h6>
            </td>
        </tr>
    )
}

export default CartItem
