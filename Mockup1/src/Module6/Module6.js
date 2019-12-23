import React, { Component } from 'react';
import './Module6.css'
class Module6 extends Component {
    render() {
        return (
            <div class="bigdivcontent6">
              
              <div class="left6" >
                
                <div class="thongtin">
                  <button id="thongtin" onClick = { () => this.props.edit('Module5') }>Thông tin</button>
                </div>
                
                <div class="lsdonhang">
                  <button id="lsdonhang" onClick = { () => this.props.edit('Module6') }>Lịch sử đơn hàng</button>                                
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