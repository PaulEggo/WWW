import React from 'react'

const Banner = () => {
    return (
        <section id='banner'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-6'>
                        <p class='promo-title'>Clothes</p>
                        <p>
                            Many brands featuring hoodies, jackets, trousers and
                            a lot more
                        </p>
                    </div>
                    <div class='col-md-6 text-center'>
                        <img
                            src='https://d2lllwtzebgpl1.cloudfront.net/308483142f00387cb970742370b2f1e1_listingImg_WkT0bLREli.jpg'
                            class='img-fluid'
                            alt=''
                        />
                    </div>
                    <div class='col-md-6 text-center'>
                        <img
                            src='https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/2:1/w_1077,h_538,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png'
                            class='img-fluid'
                            alt=''
                        />
                    </div>
                    <div class='col-md-6'>
                        <p class='promo-title'>Shoes</p>
                        <p>
                            All the new designs featuring Jordan, Nike and a lot
                            more
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
