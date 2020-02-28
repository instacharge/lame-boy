import React from 'react'

import './Home.css'

import ShopButton from './button-shop-scan.png'
import CartButton from './button-cart-scan.png'
import MediaButton from './button-media-scan.png'
import ContactButton from './button-contact-scan.png'
import SubmitButton from './button-submit.jpg'
import EnterYourEmail from './enter-your-email.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subscribe: false,
            email: false
        }

        this.textInput = React.createRef()
    }

    toggleWindow = (e) => {
        if (e.target !== e.currentTarget) return

        this.setState({
            subscribe: this.state.subscribe ? false : true
        })
        
        this.textInput.current.focus()
    }

    timeout = null;
    showBtn = () => {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setState({
                email: true
            })
        }, 500)
    }

    render() {
        return (
            <>
                <div className={this.state.subscribe ? 'subscribe-popup show' : 'subscribe-popup'} onClick={this.toggleWindow}>
                    <img src={EnterYourEmail} className="enter-your-email" alt="Enter Your Email" />
                    <form action="https://lame-boy.us4.list-manage.com/subscribe/post?u=2c71d6f9f2cee6717ce1efc9f&amp;id=922895561e" method="post">
                        <input name="EMAIL" type="text" onChange={this.showBtn} ref={this.textInput} />
                        <input className={this.state.email ? 'submit-btn show' : 'submit-btn'} type="image" value="submit" src={SubmitButton} alt="Enter Your Email" />
                    </form>
                </div>
                <div className="home" onClick={this.toggleWindow}>
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
            </>
            
        )
    }
}


export default Home