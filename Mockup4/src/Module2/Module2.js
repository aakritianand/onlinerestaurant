import React, { Component } from 'react';
import './Module2.css'
class Module2 extends Component {
    render() {
        return (
          <div class="bigdivcontent2">
            <div class="left2" >
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
            <div class="right2">
                <div>
                  <ul>
                    <li>
                      <label>
                        Họ tên:   
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id="cc4"  type="text" placeholder="Lê Trung Thông"/>
                      </form >
                    </li>
                    <li>
                      <label>
                        Số điện thoại:
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id= "cc4"  type="phone" placeholder="xxxx-xxxx-xxx"/>
                      </form>
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
                        Mã số:
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id= "cc4"  type="text" placeholder="..."/>
                      </form>
                    </li>
                    <li>
                      <label>
                        Gmail:
                      </label>
                    </li>
                    <li>
                      <input id ="cc4" type="mail" placeholder="..."></input>
                    </li>
                    <li>
                      <label>
                        Ngày bắt đầu làm việc:
                      </label>
                    </li>
                    <li>
                      <input id ="cc4" type="text" placeholder="..."></input>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        );
    }
}

export default Module2;