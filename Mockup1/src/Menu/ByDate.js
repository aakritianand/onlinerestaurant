import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

class ByDate extends Component {
    render() {
        return (
            <div class = "right">
                <div class = "column">
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="123"
                                price="123"
                            />
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="234"
                                price="5234533"
                            />
                </div>
                <div class = "column">
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="123"
                                price="123"
                            />
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="234"
                                price="5234533"
                            />
                </div>
            </div>
        );
    }
}

export default ByDate;