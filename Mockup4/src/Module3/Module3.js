import React, { Component } from 'react';

import './Module3.css'
class Module3 extends Component {
    render() {
        return (
            <div class="bigdivcontent3">
              <div class="left3">
                <div class="thongtin">
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


              <div class="right3">
                <ul>
                  <li>
                    <img class="department1" src={process.env.PUBLIC_URL + '/Image/department1.jpg'}/>
                  </li>
                  <li>
                    <label>
                      Địa chỉ:   
                    </label>
                  </li>
                  <li>
                    <form >
                      <input id="cc4"  type="text" placeholder="..."/>
                    </form >
                  </li>
                  <li>
                    <label>
                      Số điện thoại:
                    </label>
                  </li>
                  <li>
                    <form >
                      <input id= "cc4"  type="text" placeholder="xxxx-xxxx-xxx"/>
                    </form>
                  </li>
                  <li>
                    <label>
                      Địa chỉ:
                    </label>
                  </li>
                  <li>
                    <form >
                      <input id= "cc4"  type="text" placeholder="..."/>
                    </form>
                  </li>
                  <li>
                    <label>
                      Giờ làm việc:
                    </label>
                  </li>
                  <li>
                    <input id ="cc4" type="text" placeholder="..."></input>
                  </li>
                </ul>
              </div> 
            </div>
        );
    }
}

export default Module3;