import React, { Component } from 'react';
import './AppHeader.css';
class Header extends Component {
    render() {
        return (
          <div class="bigHeader">
            <div class="subadminBtn">
              <input class="headerText" type="button"value="SUBADMIN: Lê Trung Thông"/>
            </div>
          </div>
        );
    }
}

/*<div class="firstdiv">
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
                <li><div><input class="headertext" type="submit"value="Trang Chủ"/></div></li>
                <li><div><input class="headertext" type="submit"value="Giới thiệu"></input></div></li>
                <li><div><input class="headertext" type="submit"value="Chi nhánh"></input></div></li>
                <li><div><input class="headertext" type="submit"value="Thực đơn"></input></div></li>
                <li><div><input class="headertext" type="submit"value="Đặt bàn"></input></div></li>
                <li><div><input class="headertext" type="submit"value="Hỏi đáp"></input></div></li>
              </ul>
            </div>
*/
export default Header;