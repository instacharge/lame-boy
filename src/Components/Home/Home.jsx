import React from 'react'

import './Home.css'

import TempButton from './temp-button.png'

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <a href="# " className="button">
                    <img src={TempButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={TempButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={TempButton} alt=""/>
                </a>
                <a href="# " className="button">
                    <img src={TempButton} alt=""/>
                </a>
            </div>
        )
    }
}


export default Home