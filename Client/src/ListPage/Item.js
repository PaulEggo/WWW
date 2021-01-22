import React from 'react'

const Item = (props) => {
    const item = props.props[0]
    const state = props.props[1]
    const handleAdd = props.props[2]
    const handleToggle = props.props[3]
    const openModal = props.props[4]
    const { id, imgURL, Name, Price } = item
    const handleAddToCart = () => {
        let flag = false
        for (var i = 0; i < state.cart.length; i++) {
            let item = state.cart[i]
            if (id === item.id) {
                handleToggle(id, state.cart[i].Quantity + 1)
                flag = true
            }
        }
        if (!flag) {
            handleAdd(id, imgURL, Name, Price)
        }
    }

    return (
        <div key={id} class='prod-box'>
            <img src={imgURL} alt='' onClick={() => openModal(imgURL)} />
            <p>{Name}</p>
            <p class='price'>${Price}.00</p>
            <button class='add-btn' onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    )
}

export default Item
