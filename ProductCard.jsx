import React from 'react'
import shoe from './shoe.png'

const ProductCard = () =>{
    return(
        <div className='container_product_card'>
            <div className='product_card'>
                <div className='top_card'>
                    <img src={shoe} className='product_image' />
                    <span className='product_price'>$455</span>
                </div>
                <div className='bottom_card'>
                    <div className='product_name'>
                        <h6>Nike</h6>
                        <h3>Air Jorden 1 Retro</h3>
                    </div>
                    <div className='product_description'>
                        <p>The Nike Air Jordan 1 is a basketball shoe designed by Peter Moore, 
                            Nike's first Creative Director, 
                            and released in 1985. It was Michael Jordan's first 
                            signature shoe and was the first shoe to be worn in the NBA with multiple colorways. 
                            </p>
                    </div>
                    <button type='button'className='cta_add_to_cart'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard