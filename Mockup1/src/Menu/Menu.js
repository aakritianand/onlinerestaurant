import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';
import Appetizer from './Appetizer';
import MainDish from './MainDish';
import Dessert from './Dessert';
import ByDate from './ByDate';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing : 'Appetizer'
        }
    }

    edit = (page) => {
		this.state.editing = page;
		this.handleUpdate();
	}

	handleUpdate = () => {
		this.setState({});
    };
    
    renderMenu = () => {
		switch (this.state.editing) {
			case 'Appetizer':
				return this.renderAppetizer();
			case 'MainDish':
				return this.renderMainDish();
			case 'Dessert':
				return this.renderDessert();
			case 'ByDate':
				return this.renderByDate();
			default:
				return this.renderAppetizer();
		}
    }
    
    renderAppetizer = () => {
        return (
            <Appetizer/>
        )
    }

    renderMainDish = () => {
        return (
            <MainDish/>
        )
    }

    renderDessert = () => {
        return (
            <Dessert/>
        )
    }

    renderByDate = () => {
        return (
            <ByDate/>
        )
    }

    render() {
        return (
            <div id = "Menu">
                <div class = "department-select-tab">
                    <select>
                        <option>Chi nhánh 1</option>
                        <option>Chi nhánh 2</option>
                        <option>Chi nhánh 3</option>
                    </select>
                </div>
                <div class = "test">
                    <div class = "left">
                        <div><button onClick = { () => this.edit('Appetizer') }>Khai Vị</button></div>
                        <div><button onClick = { () => this.edit('MainDish') }>Món chính</button></div>
                        <div><button onClick = { () => this.edit('Dessert') }>Tráng miệng</button></div>
                        <div><button onClick = { () => this.edit('ByDate') }>Theo ngày</button></div>
                    </div>
                    <div>
                        {this.renderMenu() }    
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu; 