import React from 'react'
import Modal from 'react-modal'

import Item from './Item'

const ListLayout = (props) => {
    let itemList = []
    let state = props.props[0]
    let DataList = props.props[4]
    Modal.setAppElement('body')

    const [modalState, setModalState] = React.useState({
        isModalOpen: false,
        imgURL: '',
    })

    const handleClose = () => {
        setModalState({ ...modalState, isModalOpen: false })
    }

    const openModal = (url) => {
        setModalState({ ...modalState, isModalOpen: true, imgURL: url })
    }

    const filterList = (type) => {
        switch (type) {
            case 'Shirt': {
                itemList = DataList.filter((item) => item.Type === 'Shirt')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            case 'Hoodie': {
                itemList = DataList.filter((item) => item.Type === 'Hoodie')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            case 'Jacket': {
                itemList = DataList.filter((item) => item.Type === 'Jacket')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            case 'Pant': {
                itemList = DataList.filter((item) => item.Type === 'Pant')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            case 'Shoe': {
                itemList = DataList.filter((item) => item.Type === 'Shoe')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            case 'Sock': {
                itemList = DataList.filter((item) => item.Type === 'Sock')
                return itemList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
            default: {
                return DataList.map((item) => {
                    return (
                        <Item
                            props={[
                                item,
                                props.props[1],
                                props.props[2],
                                props.props[3],
                                openModal,
                            ]}
                        ></Item>
                    )
                })
            }
        }
    }

    return (
        <section class='products'>
            <Modal
                isOpen={modalState.isModalOpen}
                onRequestClose={handleClose}
                style={{
                    overlay: {},
                    content: {
                        top: '8%',
                        bottom: '6%',
                        right: '35%',
                        left: '35%',
                    },
                }}
            >
                <img
                    src={modalState.imgURL}
                    alt=''
                    style={{ width: '100%', height: '85%' }}
                ></img>
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
                    class='btn secondary'
                    onClick={handleClose}
                >
                    Close
                </button>
            </Modal>
            <div class='prod-head'>
                <h3>Item List</h3>
            </div>
            <div class='list-container'>{filterList(state)}</div>
        </section>
    )
}

export default ListLayout
