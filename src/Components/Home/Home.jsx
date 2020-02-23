import React from 'react'

import './Home.css'

import ShopButton from './button-shop-funky.jpg'
import CartButton from './button-cart-funky.jpg'
import MediaButton from './button-media-funky.jpg'
import ContactButton from './button-contact-funky.jpg'

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <a href="# " className="button">
                    {/* Shop */}
                    <img src={ShopButton} alt=""/>
                </a>
                <a href="# " className="button">
                    {/* Cart */}
                    <img src={CartButton} alt=""/>
                </a>
                <a href="# " className="button">
                    {/* Media */}
                    <img src={MediaButton} alt=""/>
                </a>
                <a href="# " className="button">
                    {/* Contact */}
                    <img src={ContactButton} alt=""/>
                </a>
            </div>
        )
    }
}


export default Home