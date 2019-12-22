import React, { Component } from 'react';
import './AppHeader.css';
import App from '../App';

class Header extends React.Component {
	render() {
		return (
		<div class="big header">
		  <div class="firstdiv">
			<div class = "login-header">
				<div class= "login-header-text">
					<input class="buttonloginout" type="submit" value="Đăng nhập/Đăng ký"></input>
				</div>
			</div>
			<div class="cart-icon">
				<input  type="image" src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="submit" width="25" height="25"></input>
			</div>
	   		</div>
				<div class = "menu-tab">
					<img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'}/>
					<div class = "restaurant-name-block">
						<p class = "restaurant-name">Nhà hàng Tứ Phương</p>
					</div>
					<ul class = "head-function">
						<li><div><button class="headertext" onClick = { () => this.props.edit('Main') }>Trang chủ</button></div></li>
						<li><div><button class="headertext" onClick = { () => this.props.edit('Introduction') }>Giới thiệu</button></div></li>
						<li><div><button class="headertext" onClick = { () => this.props.edit('Department') }>Chi Nhánh</button></div></li>
						<li><div><button class="headertext" onClick = { () => this.props.edit('Menu') }>Thực Đơn</button></div></li>
						<li><div><button class="headertext" onClick = { () => this.props.edit('Introduction') }>Đặt Hàng</button></div></li>
						<li><div><button class="headertext" onClick = { () => this.props.edit('Introduction') }>Hỏi Đáp</button></div></li>
					</ul>
			  </div>
		</div>
			
		);
	}
}

export default Header;