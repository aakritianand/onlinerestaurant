import React, { Component } from 'react';
import './Help.css'

class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotline: 'xxx',
            message: 'yyy',
            email: 'zzz'
        }
    }
    
    render() {
        return (
            <div class = "Help">
                <ul>
                    <li>
                        <img src = {process.env.PUBLIC_URL + '/Image/phone-icon.jpg'}/>
                        <p>Hotline: {this.state.hotline}</p>
                    </li>
                    <li>
                        <img src = {process.env.PUBLIC_URL + '/Image/messenger-icon.png'}/>
                        <p>Message: {this.state.message}</p>
                    </li>
                    <li>
                        <img src = {process.env.PUBLIC_URL + '/Image/gm-icon.jpg'}/>
                        <p>Email: {this.state.email}</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Help;