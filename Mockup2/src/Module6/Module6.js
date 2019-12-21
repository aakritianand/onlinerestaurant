import React, { Component } from 'react';

class Module6 extends Component {
    render() {
        return (
            <div class="bigdivcontent6">
        <div class="left6" >
          <div class="thongtin">
            <input id="thongtin" type="button" value="Thông tin"/>
          </div>
          <div class="lsdonhang">
            <input id="lsdonhang" type="button" value="Lịch sử đơn hàng">

            </input>
        
          </div>
          
        </div>
        <div class="right6">
          <div class="dondathang">Đơn đặt hàng</div>
          <div class="donhang1">Đơn đặt hàng 1</div>
          <div class="donhang2">Đơn đặt hàng 2</div>
          <div class="donhang3">Đơn đặt hàng 3</div>
          <div class="emptybox1"></div>
          <div class="emptybox2"></div>
          <div class="emptybox3"></div>
          <div class="datlai1">
            <form>
              <input id="rebook" type="submit" value="Đặt lại"></input>
            </form>
          </div>
          <div class="datlai2">
          <form>
              <input id="rebook" type="submit" value="Đặt lại"></input>
            </form>
          </div>
          <div class="datlai3">
          <form>
              <input id="rebook" type="submit" value="Đặt lại"></input>
            </form>
          </div>
        </div>
      </div>
        );
    }
}

export default Module6;