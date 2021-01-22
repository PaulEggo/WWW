import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    useLocation,
} from 'react-router-dom'

const Categories = (props) => {
    let setState = props.props
    const handleCategory = (type) => {
        switch (type) {
            case 'Shirt': {
                setState('Shirt')
                break
            }
            case 'Hoodie': {
                setState('Hoodie')
                break
            }
            case 'Jacket': {
                setState('Jacket')
                break
            }
            case 'Pant': {
                setState('Pant')
                break
            }
            case 'Shoe': {
                setState('Shoe')
                break
            }
            case 'Sock': {
                setState('Sock')
                break
            }
            default:
                setState('all')
        }
    }

    return (
        <section id='categories'>
            <div class='container text-center'>
                <h1 class='title'>CATEGORIES</h1>
                <div class='row text-center'>
                    <div class='col-md-2 categories'>
                        <a
                            onClick={() => handleCategory('Shirt')}
                            class='all-products-link'
                        >
                            <img
                                src='https://media.very.co.uk/i/very/NDFJC_SQ1_0000000004_BLACK_MDf?$300x400_retinamobilex2$'
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>T-Shirts</h4>
                    </div>
                    <div class='col-md-2 categories '>
                        <a
                            onClick={() => handleCategory('Hoodie')}
                            class='all-products-link'
                        >
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/I/81GtO85B-ZL._AC_UX466_.jpg'
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>Hoodies</h4>
                    </div>
                    <div class='col-md-2 categories'>
                        <a
                            onClick={() => handleCategory('Jacket')}
                            class='all-products-link'
                        >
                            <img
                                src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a7e81271-c541-4e9e-9fa2-bc9427f7aa39/jordan-jumpman-air-puffer-jacket-M6000b.jpg'
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>Jackets</h4>
                    </div>
                    <div class='col-md-2 categories'>
                        <a
                            onClick={() => handleCategory('Pant')}
                            class='all-products-link'
                        >
                            <img
                                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/598975/42/mod01/fnd/EEA/fmt/png/Classics-Men's-Cargo-Pants"
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>Pants</h4>
                    </div>
                    <div class='col-md-2 categories'>
                        <a
                            onClick={() => handleCategory('Shoe')}
                            class='all-products-link'
                        >
                            <img
                                src='https://cdnph.upi.com/svc/sv/i/2751597422268/2020/1/15974225399593/Michael-Jordan-shoes-auctioned-for-615000-setting-new-record.jpg'
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>Shoes</h4>
                    </div>
                    <div class='col-md-2 categories'>
                        <a
                            onClick={() => handleCategory('Sock')}
                            class='all-products-link'
                        >
                            <img
                                src='https://www.vans.com.au/media/catalog/product/cache/2f9039965fa8ae9fd28925d9694bfc02/v/n/vn-0xseblk_blk_01.jpg'
                                class='cat-img'
                                alt=''
                            />
                        </a>
                        <h4>Socks</h4>
                    </div>
                </div>
                <button type='button' class='btn btn-prim'>
                    <a
                        class='all-products-link'
                        onClick={() => handleCategory('all')}
                    >
                        All Products
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Categories
