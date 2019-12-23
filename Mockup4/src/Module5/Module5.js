import React, { Component } from 'react';

import './Module5.css'
class Module5 extends Component {
    render() {
        return (
          <div bigdivcontent5>
            <div class="left5" >
              <div class="">
                  <input id="department-info" type="button" value="Thông tin chi nhánh nhà hàng"/>
                </div>
                <div class="">
                  <input id="order" type="button" value="Đơn đặt hàng/ Đơn đặt bàn"/>
                  </div>
                <div class="">
                  <input id="menu" type="button" value="Thực đơn"/>
                </div>
                <div class="">
                  <input id="appetizer" type="button" value="Khai vị"/>
                </div>
                <div class="">
                  <input id="mainDish" type="button" value="Món chính"/>
                </div>
                <div class="">
                  <input id="desert" type="button" value= "Tráng miệng"/>
                </div>
                <div class="">
                  <input id="dishByDate" type="button" value= "Theo ngày"/>
                </div>
              </div>
            <div class="right5">
              <ul>
                  <li>
                    <img class="dish" src={process.env.PUBLIC_URL + '/Image/dish1.jpg'}/>
                  </li>
                  <li>
                    <div class="dish_title">
                      <form >
                        <input id="d5"  type="text" placeholder="Tên món"/>
                      </form >
                    </div>
                  </li>
                  <li>
                    <div class="dish_price">
                      <form >
                        <input id="d5" type="text" placeholder="Giá tiền"/>
                      </form >
                    </div> 
                  </li>
                  <li>
                    <div>
                      <button class="selectBtn" type="button" >Chọn</button>
                    </div>
                  </li>
                  <li>
                    <img class="dish" src={process.env.PUBLIC_URL + '/Image/dish2.jpg'}/>
                  </li>
                  <li>
                    <div class="dish_title">
                      <form >
                        <input id="d5"  type="text" placeholder="Tên món"/>
                      </form >
                    </div>
                  </li>
                  <li>
                    <div class="dish_price">
                      <form >
                        <input id="d5" type="text" placeholder="Giá tiền"/>
                      </form >
                    </div> 
                  </li>
                  <li>
                    <div>
                      <button class="selectBtn" type="button" >Chọn</button>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        );
    }
}

export default Module5;