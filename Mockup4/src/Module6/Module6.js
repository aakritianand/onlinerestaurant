import React, { Component } from 'react';

import './Module6.css'
class Module6 extends Component {
    render() {
        return (
          <div class="bigdivcontent6">
            <div class="left6" >
              <div class="lef6">
                  <input id="department-info" type="button" value="Thông tin chi nhánh nhà hàng"/>
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
            </div>
          <div class="right6">
                <div class="dishInfo">
                  <ul>
                    <li>
                      <img class="dish" src={process.env.PUBLIC_URL + '/Image/dish1.jpg'}/>
                    </li>
                    <li>
                      <div class="dish_title">
                        <form >
                          <input id="d6"  type="text" placeholder="Tên món"/>
                        </form >
                      </div>
                    </li>
                    <li>
                      <div class="dish_price">
                        <form >
                          <input id="d6" type="text" placeholder="Giá tiền"/>
                        </form >
                      </div> 
                    </li>
                    <li>
                      <button class="changeDishInfoBtn" value="">Thay đổi</button>
                    </li>
                    <li>
                      <img class="dish" src={process.env.PUBLIC_URL + '/Image/dish2.jpg'}/>
                    </li>
                    <li>
                      <div class="dish_title">
                        <form >
                          <input id="d6"  type="text" placeholder="Tên món"/>
                        </form >
                      </div>
                    </li>
                    <li>
                      <div class="dish_price">
                        <form >
                          <input id="d6" type="text" placeholder="Giá tiền"/>
                        </form >
                      </div> 
                    </li>
                    <li>
                      <button class="changeDishInfoBtn">Thay đổi</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <button class="addDishBtn">Thêm món</button>
                </div>
        </div>
      </div>
        );
    }
}

export default Module6;