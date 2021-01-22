import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import SocialMedia from '../HomePage/SocialMedia'
import Footer from '../HomePage/Footer'
import Categories from './Categories'
import ListLayout from './ListLayout'

const List = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let { state, handleAdd, handleToggle, dataArray } = props.props

    const [listState, setListState] = React.useState(useLocation().state)

    return (
        <div>
            <Navbar props={state.totalQuantity} />
            <Categories props={setListState} />
            <ListLayout
                props={[listState, state, handleAdd, handleToggle, dataArray]}
            />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default List
