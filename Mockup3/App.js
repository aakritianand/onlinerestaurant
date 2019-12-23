import React from 'react';
import './AppHeader.css';
import './AppContent.css';
import './AppFooter.css';
import './mockup3.css';
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './Module3/Module3';
import Module4 from './Module4/Module4';
import Module5 from './Module5/Module5';
import Module7 from './Module7/Module7';
import Module6 from './Module6/Module6';
import Module8 from './Module8/Module8';
function App() {
  return (
    <div className="App">
     
      <Content5/>
      
      
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
       <img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'} alt=""/>
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
class Content5 extends React.Component {
  render() {
    return (
      <Module5/>
    );
  }
}
class Content6 extends React.Component {
  render() {
    return (
      <Module6/>
    );
  }
}
class Content7 extends React.Component {
  render() {
    return (
      <Module7/>
    );
  }
}
class Content8 extends React.Component {
  render() {
    return (
      <Module8/>
    );
  }
}
class AppFooter extends React.Component {
  render() {
     return (
      <div class="footer">
       <div class="information">
        <img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'}alt=""/>
        <div class = "restaurant-name-block">
          <p class = "restaurant-name">Nhà hàng Tứ Phương</p>
        </div>
        <div class="followus">
          <p><strong>Follow us</strong></p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/fb-icon.jpg'} alt=""/>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/ig-icon.jpg'} alt=""/>
        </div>
        <div class="feedback">
          <p>For feedback</p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/gm-icon.jpg'} alt=""/>
          <p>nhahangtuphuong@gmail.com</p>
        </div>
        <div class="contact">
          <p><strong>For contact</strong></p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/phone-icon.jpg'}alt=""/>
          <p>0356124235</p>
        </div>
           </div>
      </div>
     );
  }
 }

export default App;
