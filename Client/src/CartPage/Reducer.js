import { CHANGE, CLEAR_CART, REMOVE, ADD_ITEM, LOAD_STATE } from './Actions'

const Reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [], totalPrice: 0, totalQuantity: 0 }
    }
    if (action.type === CHANGE) {
        let tempCartList = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.value > 0) {
                    item = {
                        ...item,
                        Quantity: parseInt(action.payload.value),
                    }
                }
            }
            return item
        })
        let currentState = { ...state, cart: tempCartList }

        let totalPrice = 0
        let totalQuantity = 0

        for (var i = 0; i < currentState.cart.length; i++) {
            let item = currentState.cart[i]
            totalPrice += item.Quantity * item.Price
            totalQuantity += item.Quantity
        }

        return {
            ...currentState,
            totalPrice: totalPrice,
            totalQuantity: totalQuantity,
        }
    }
    if (action.type === REMOVE) {
        let currentState = {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        }

        let totalPrice = 0
        let totalQuantity = 0

        for (var j = 0; j < currentState.cart.length; j++) {
            let item = currentState.cart[j]
            totalPrice += item.Quantity * item.Price
            totalQuantity += item.Quantity
        }

        return {
            ...currentState,
            totalPrice: totalPrice,
            totalQuantity: totalQuantity,
        }
    }
    if (action.type === ADD_ITEM) {
        let item = {
            id: action.payload.id,
            imgURL: action.payload.imgURL,
            Name: action.payload.Name,
            Price: action.payload.Price,
            Quantity: 1,
        }
        console.log()
        let tempCart = [...state.cart]
        tempCart.push(item)
        let currentState = {
            ...state,
            cart: tempCart,
            totalPrice: state.totalPrice + action.payload.Price,
            totalQuantity: state.totalQuantity + 1,
        }
        return currentState
    }
    if (action.type === LOAD_STATE) {
        console.log(action.payload)
        state = action.payload
    }
    return state
}

export default Reducer
