import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'

import Home from './HomePage/Home'
import Cart from './CartPage/Cart'
import List from './ListPage/List'
import Checkout from './CheckoutPage/Checkout'

import { CHANGE, CLEAR_CART, REMOVE, ADD_ITEM } from './CartPage/Actions'
import reducer from './CartPage/Reducer'

const defaultState = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const App = () => {
    const [state, dispatch] = React.useReducer(reducer, defaultState)
    const [dataArray, setDataArray] = React.useState([])

    const handleRemove = (id) => {
        dispatch({ type: REMOVE, payload: { id: id } })
    }

    const handleToggle = (id, c) => {
        dispatch({ type: CHANGE, payload: { id: id, value: c } })
    }

    const handleClear = () => {
        dispatch({ type: CLEAR_CART })
    }

    const handleAdd = (id, imgURL, Name, Price) => {
        dispatch({
            type: ADD_ITEM,
            payload: {
                id: id,
                imgURL: imgURL,
                Name: Name,
                Price: Price,
                Quantity: 1,
            },
        })
    }

    React.useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setDataArray(response.data)
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home props={state} />
                </Route>
                <Route path='/Cart'>
                    <Cart
                        props={{
                            state,
                            handleRemove,
                            handleToggle,
                            handleClear,
                        }}
                    />
                </Route>
                <Route path='/List'>
                    <List
                        props={{
                            state,
                            handleAdd,
                            handleToggle,
                            dataArray,
                        }}
                    />
                </Route>
                <Route path='/Checkout'>
                    <Checkout props={{ state, handleClear }} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
