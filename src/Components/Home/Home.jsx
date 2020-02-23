import React from 'react'

import './Home.css'

import ShopButton from './shop-button.png'
import CartButton from './cart-button.png'
import MediaButton from './media-button.png'
import ContactButton from './shop-button.png'

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <a href="# " className="button">
                    <img src={ShopButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={CartButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={MediaButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={MediaButton} alt=""/>
                </a>
            </div>
        )
    }
}


export default Home