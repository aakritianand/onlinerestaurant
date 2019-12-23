import React from 'react';
import './AppHeader.css';
import './AppContent.css';
import './AppFooter.css';
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './Module3/Module3';
import Module4 from './Module4/Module4';
function App() {
  return (
    <div className="App">
     
      <Content4/>
      
      
    </div>
  );
}
class AppHeader extends React.Component {
  render() {
     return (
        
        <div class="bigheader">
          
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
         <li><strong>Trang Chủ</strong></li>
         <li><strong>Giới Thiệu</strong></li>
         <li><strong>Chi Nhánh</strong></li>
         <li><strong>Thực Đơn</strong></li>
         <li><strong>Đặt Hàng</strong></li>
         <li><strong>Hỏi Đáp</strong></li>
       </ul>
     </div>
        </div>
     );
  }
}
class Content1 extends React.Component {
  render() {
    return (
      <Module1/>
    );
  }
}
class Content2 extends React.Component {
  render() {
    return (
      <Module2/>
    );
  }
}
class Content3 extends React.Component {
  render() {
    return (
      <Module3/>
    );
  }
}
class Content4 extends React.Component {
  render() {
    return (
      <Module4/>
    );
  }
}
class AppFooter extends React.Component {
  render() {
     return (
      <div class="footer">
       <div class="information">
        <img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'}/>
        <div class = "restaurant-name-block">
          <p class = "restaurant-name">Nhà hàng Tứ Phương</p>
        </div>
        <div class="followus">
          <p><strong>Follow us</strong></p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/fb-icon.jpg'}/>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/ig-icon.jpg'}/>
        </div>
        <div class="feedback">
          <p>For feedback</p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/gm-icon.jpg'}/>
          <p>nhahangtuphuong@gmail.com</p>
        </div>
        <div class="contact">
          <p><strong>For contact</strong></p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/phone-icon.jpg'}/>
          <p>0356124235</p>
        </div>
           </div>
      </div>
     );
  }
 }

export default App;
