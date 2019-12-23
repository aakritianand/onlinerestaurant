import React, { Component } from 'react';
import './Module4.css'
class Module4 extends Component {
    render() {
        return (
            <div class="bigdivcontent4">
            <div class="left4" >
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
          <div class="right4">
            
            <div class="dondathang">Đơn đặt hàng</div>
            <div class="right4-2">
            <div class="donhang1">Đơn đặt hàng 1</div>
            <div class="donhang2">Đơn đặt hàng 2</div>
            <div class="donhang3">Đơn đặt hàng 3</div>
            <div class="emptybox1"></div>
            <div class="emptybox2"></div>
            <div class="emptybox3"></div>
          </div>
        </div>
      </div>
        );
    }
}

export default Module4;